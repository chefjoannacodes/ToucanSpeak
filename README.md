# ToucanSpeak

This application was inspired by my passion to learn language, in particular, the Romance languages: French, Italian, Spanish, Portuguese. 

This app is in its infancy, and the goal is to provide Foreign Music Videos and Native Speakers content in a user friendly way, i.e. Shakira with English subtitles to learn Spanish. I have selected some of my favorite music videos, as well as some of my favorite channels from Native speakers that all can learn from. 

The goal is to provide a site where users can have fun learning a language and connect with other passionate language learners. The hope is to initiate new friendships around the world, skype or coffee dates to get people totally immersed in each other's culture. 

## Live Link 
 - https://chefjoannacodes.github.io/ToucanSpeak/

## Description on how to use the app

- Click on the button to display music and language learning channels for that particular language. 
- Alternatively, use the search bar to search for a language you want to learn from the YouTube API


## Technologies Used
#### 
- Javascript
- Jquery for Dom Manipulation
- AJAX for API GET requests
- HTML, CSS, Bootstrap
- Git

## Code Explaination
- I obtained the YouTube API and linked my app to YouTube with and AJAX call. I used JQuery to display the data I wanted to display on HTML. My AJAX call was within the function youtube so I could call this function for all my different buttons. The AJAX call looked like this: 

```

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
		..............
	};
});
};


```
- I then created buttons with the specified channels and artists I wanted to feature for that particular language
-------------
