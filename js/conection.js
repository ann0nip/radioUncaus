$(document).ready(function(){
setTimeout(function(){ alert("Hello"); }, 60000);
  $("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: "http://65.60.52.122:8529/;stream/1"
      });
    },
    swfPath: "/js",
    supplied: "mp3"
  });
});