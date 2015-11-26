// /*jslint browser: true*/
// /*global $, jQuery, alert*/

var main = function () {
    'use strict';

//    // expand expandable panel div if clicked
//    $('.expandable-panel').on('click', function() {
//        var $panel = $(this);
//        $panel.css('flex-grow', '5');
//
//        var $siblings = $panel.siblings()
//        $siblings.css('flex-grow', '1');
//    });
//    
//    // reset flex box if click outside of the panels
//    $(document).on('click', function(event) {
//        if(!$(event.target).closest('.expandable-panel').length) {
//            $('.expandable-panel').css('flex-grow', '1');
//        }
//    });
     
    // instantiate Mix It Up
    $('#projects-container').mixItUp();
};

$(document).ready(main);