$(document).ready(function () {
  
var plyr_options = {
	    autoplay: true,
	    clickToPlay: true,
	    showPosterOnEnd: true,
	    controls: ['mute', 'progress', 'play']
	  };



    // Setup the player
    const players = new plyr.setup(plyr_options);

    players.source = { type: "video", sources: [{ src: "518467980", provider: "vimeo" }] };

    players[0].on('ended', function(event) {
      players[0].restart();
       players[0].play();
	  });
});
