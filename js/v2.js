// page initialization
$(function () {
    $('#fullpage').fullpage({
        anchors: ['intro', 'robots', 'mobile', 'web', 'design', 'misc', 'contact'],
        menu: '#projects-menu',
        slidesNavigation: true,
        loopHorizontal: false,
        // fade nav in and out as appropriate
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            var nav = $("#projects-menu");
            
            if (index == 1 && direction == 'down') {
                nav.stop().animate({
                    opacity: 1
                }, 800);
            } else if (nextIndex == 1 && direction == 'up') {
                nav.stop().animate({
                    opacity: 0
                }, 400);
            }
        }
    });
});

