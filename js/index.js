/*jslint browser: true*/
/*global $, jQuery, alert*/

var main = function () {
    'use strict';
     
    // instantiate Mix It Up
    $('#projects-container').mixItUp();
    
    $('div.mix').each(function(n) {
        addBackgroundOverlay($(this), true);
    });
    
    $("div.mix").hover(function() {
        var div = $(this);
        div.children().css("display", "none");
        addBackgroundOverlay(div, false);
    }, function() {
        var div = $(this);
        div.children().css("display", "");
        addBackgroundOverlay(div, true);
    });
};

// adds or removes semi-transparent overlay on given div
function addBackgroundOverlay(div, hide) {
    var id = div.attr('id');
    var bkgdStr = "url(img/projects/pics/"+id+".png)";
    if (hide) { bkgdStr = "linear-gradient(rgba(50, 50, 50, 0.7), rgba(50, 50, 50, 0.8))," + bkgdStr; }
    div.css("background", bkgdStr);
}

$(document).ready(main);