/*jslint browser: true*/
/*global $, jQuery, alert*/

var descriptionColorsDict = {
    "mezzo":"37,94,54", "trext":"46,85,77", "bluestamp":"40,44,54", "sierra":"61,72,102",
    "quakes":"52,102,112", "govo":"97,78,43", "catalan":"109,52,48"
};

var main = function () {
    'use strict';
     
    // instantiate Mix It Up
    $('#projects-container').mixItUp();
    
    $('div.mix').each(function(n) {
        var div = $(this);
        setUpDiv(div);
        showDescription(div, false);
    });
    
    $("div.mix").hover(function() {
        showDescription($(this), true);
    }, function() {
        showDescription($(this), false);
    });
};

function showDescription(div, show) {
    if (!show) { // normally hidden state
        div.children('.description').animate({bottom:"-55px"},250);
    } else { // hover show state
        div.children('.description').animate({bottom:"0px"},250);
    }
}

function setUpDiv(div) {
    var id = div.attr('id');
    var bkgdStr = "url(img/projects/pics/"+id+".png)";
    div.css("background", bkgdStr);
    
    var description = div.children('.description');
    description.css("background-color", "rgba("+descriptionColorsDict[id]+",.85)");
}

$(document).ready(main);