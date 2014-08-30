$(document).foundation();

$('#magellan').foundation('magellan', {
  // specify the class used for active sections
  active_class: 'active',
  // how many pixels until the magellan bar sticks, 0 = auto
  threshold: 0,
  // pixels from the top of destination for it to be considered active
  destination_threshold: 0,
  // calculation throttling to increase framerate
  throttle_delay: 50,
  // top distance in pixels assigned to the fixed element on scroll
  fixed_top: 0  
});