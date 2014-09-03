//Initialize Foundation
$(document).foundation();

//Grab map coordinates from link
$(document).ready(function(){
	
    $('.map-link').on('click', function(e){
    	e.preventDefault();
    	address=encodeURIComponent($(this).attr('data-map'));
    	map= $("<iframe height='500' scrolling='no'  marginheight='0' marginwidth='0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCnXy5N52r2BsyqhjIU-T4shbIqgeaf34g&amp;q="+ address + "'></iframe>");
    	map.addClass('map-target small-12 columns big-icon');
    	$('.map-target').replaceWith(map);
    });
});

//Initialize the sticky navbar
$('.navbarWrapper').stickyNavbar({
	startAt: 0,
	selector: "a",

});