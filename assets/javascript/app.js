console.log ("our files are linked");
console.log("why don't I get errors");

var inputName;
var widgetTemplate = $("#widget").clone();
$("#widget").hide();

//on page load, create an empty video playlist
$("#submit-btn").on("click", function(event) {
	inputName = $("#search").val().trim();
	console.log("The input name", inputName);
	// var vidName = inputName;
	// var vidName = inputname;
	youtube(inputName);
});

$("#italian-btn").on("click", function(event) {
	var inputName = "Learn+Italian+with+Lucrezia"
	console.log("The input name", inputName);
	youtube(inputName);
});
$("#spanish-btn").on("click", function(event) {
	var inputName = "Shakira+english+subtitles"
	console.log("The input name", inputName);
	youtube(inputName);
});
$("#portuguese-btn").on("click", function(event) {
	var inputName = "Mayra+andrade+subtitles"
	console.log("The input name", inputName);
	youtube(inputName);
});
$("#french-btn").on("click", function(event) {
	var inputName = "Zaz+subtitles"
	console.log("The input name", inputName);
	youtube(inputName);
});

function youtube(inputName) {
	event.preventDefault();
	// var allYoutube = "http://www.googleapis.com/youtube/v3/videos?key=" + youtubeAPIKey + "&part=snippet&id=" + inputName;
	// console.log("all youtube", allYoutube);

	var youtubeAPIKey = "AIzaSyDABqEbp748N7OFyqzldX68cSdo_Og5ce8";

	var youtubeLink = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + inputName + "&type=video&key=AIzaSyDABqEbp748N7OFyqzldX68cSdo_Og5ce8";
	var embedYT = "https://www.youtube.com/embed?listType=search&list=" + inputName;
	console.log("the embedded link", embedYT);
	// console.log("youtube link", youtubeLink);

	//Performing an AJAX GET request to our qURL

	$.ajax({
		url: youtubeLink,
		method: "GET"
	})
.done(function(response) {
	for (var i=0; i<10; i++) {
		var videoPhoto = response.items[i].snippet.thumbnails.medium.url;
		var videoTitle = response.items[i].snippet.title;
		var fullLink = $("<img class='vidPics' src='" + videoPhoto + "'>");
		var outerDiv = $("<div>");
		var titleDiv = $("<div>");
		titleDiv.addClass("video-title");
		titleDiv.append(videoTitle);
		outerDiv.prepend(titleDiv);
		outerDiv.attr("data-file", response.items[i].id.videoId);
		outerDiv.attr("id", response.items[i].id.videoId);
		outerDiv.addClass("video-file");
		console.log(fullLink);
		$("#youtubeVideos").prepend(outerDiv);
	};
});
};


$("#youtubeVideos").on("click", ".video-file", function(event) {
	event.preventDefault();
	var videoID = $(this).attr("data-file");
	console.log(videoID);
	$(this).html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoID + '" frameborder="0" allowfullscreen></iframe>');
});

$("#magicVid").on("click", function(){
	$("#test").html(" ");
	var addThis = '<p class="list-group-item favs">' + inputName + '</p>';
	$("#add").prepend(addThis);
});


//Google Translate
function start() {
        // Initializes the client with the API key and the Translate API.
        gapi.client.init({
          'apiKey': 'YOUR_API_KEY',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
        }).then(function() {
          // Executes an API request, and returns a Promise.
          // The method name `language.translations.list` comes from the API discovery.
          return gapi.client.language.translations.list({
            q: 'hello world',
            source: 'en',
            target: 'de',
          });
        }).then(function(response) {
          console.log(response.result.data.translations[0].translatedText);
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
      };

      // Loads the JavaScript client library and invokes `start` afterwards.
      gapi.load('client', start);
// function init() {
// 	gapi.client.setApiKey("AIzaSyAJNjt1r1J8nnsUOjKFymeahQRs1A7EZog");
// 	gapi.client.load("youtube", "v3", function() {
// 		//YT API is ready
// 	});
// }