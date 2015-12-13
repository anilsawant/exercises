$( function() {

  $('#alertMe').click( function(e) {
    e.preventDefault();
    $('#successAlert').slideDown();
  });

  $('a.pop').click( function(e) {
    e.preventDefault();
  });
  $('a.pop').popover();

  $('[rel="tooltip"]').tooltip();

  $('input.required').popover();

});

window.onscroll = function() { show(); };

function show() {
  var bodyElement = document.documentElement; //bodyElement for Mozilla
  var body = document.body; //body for Chrome
  var navbar = document.getElementById('main-navbar');
  var y1 = bodyElement.scrollTop;
  var y2 = body.scrollTop;
  var heroElementHeight = document.getElementById('hero-element').clientHeight;
  var mainNavbarHeight = navbar.clientHeight;
  var switchHeight = heroElementHeight - mainNavbarHeight - 15; // subtract main-navbar's margin-bottom i.e 15px
  // var box = { left:0, top:0};
  // box = navbar.getBoundingClientRect();

  if( y1 > switchHeight ||  y2 > switchHeight ) {
    navbar.className = 'navbar navbar-fixed-top';
  } else {
    navbar.className = 'navbar navbar-absolute-bottom transparent';
  }
}

window.addEventListener('resize',function(){
  var w = Math.max(document.documentElement.clientWidth);
  document.getElementById('ding').innerHTML = w+10;
},true);
