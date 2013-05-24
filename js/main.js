$(document).ready(function(){

	$('button').click(function (){
		// $.ajax({
// 		  type: "GET",
// 		  url: "http://api.tumblr.com/v2/blog/markcurtisreport.tumblr.com/posts/photo?api_key=BQBZcyujDME2DMgP5V7mUFo2FglhxYwk6jJy6BOTy5dflTODDf&limit=1",
// 		  dataType: "jsonp",
// 		  success: function (data) {
// 			console.log(data.response.posts[0].photos);
// 		  },
// 		});
		myDropzone.processQueue();
	});
	

	
	var myDropzone = new Dropzone(document.body, { // Make the whole body a dropzone
    	url: "upload/", // Set the url
	    previewsContainer: "#fileDropTarget", // Define the container to display the previews
    	enqueueForUpload: false
	});	
	
	myDropzone.on("addedfile", function(file) {
		myDropzone.filesQueue.push(file);
	});
	
});

