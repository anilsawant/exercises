$( function() {

  $('#alertMe').click( function(e) {
    e.preventDefault();
    $('#successAlert').slideDown();
  });

  $('a.pop').click( function(e) {
    e.preventDefault();
  });
  $('a.pop').popover();

  $('[rel="tooltip"]').tooltip(); // To pop-up a tooltip when

  //  To normalize the heights of the Panels
  // if( $("[name='hero-panel']").length )
  //   $("[name='hero-panel']").normalizeHeight();

});

window.onscroll = function() { show(); };

function show() {
  var bodyElement = document.documentElement; //bodyElement for Mozilla
  var body = document.body; //body for Chrome
  var y1 = bodyElement.scrollTop;
  var y2 = body.scrollTop;
  var navbar = document.getElementById('main-navbar');
  var heroElement = document.getElementById('hero-element');
  if(navbar != null && heroElement != null ) {
    var switchHeight = heroElement.clientHeight - navbar.clientHeight - 15; // subtract main-navbar's margin-bottom i.e 15px
    // var box = { left:0, top:0};
    // box = navbar.getBoundingClientRect();

    if( y1 > switchHeight ||  y2 > switchHeight ) {
      navbar.className = 'navbar navbar-fixed-top';
    } else {
      navbar.className = 'navbar navbar-absolute-bottom transparent';
    }
  }
}

window.addEventListener('resize',function(){
  var w = Math.max(document.documentElement.clientWidth);
  document.getElementById('ding').innerHTML = w+10;

  // if( $("[name='hero-panel']").length )
  //   $("[name='hero-panel']").normalizeHeight();

},true);


/*
*
* Function to normalize the heights of the group of elements
*
*/
(function( $ ){
   $.fn.normalizeHeight = function() {
     var panels = $(this);
     var maxElementHeight = $(this).eq(0).outerHeight();
     for(var i=0; i < panels.length; i++ ) {
       var temp = $(this).eq(i).outerHeight();
       if( temp > maxElementHeight )
         maxElementHeight = temp;
     }
     for(var i=0; i < panels.length; i++ ) {
       $(this).eq(i).css('min-height', maxElementHeight );
     }
   };
})( jQuery );

function addPhoto() {
  alert("Add your photo...");
}
function addCard() {
  var div = document.getElementById('tab3');
  var initialRow = div.innerHTML;
  var newRow = '<form class="form-horizontal"><div class="form-group col-sm-4 "><label for="cardName" class="control-label">Card Name</label><input class="form-control" id="cardName" placeholder="Card Name" type="text"></div><div class="form-group col-sm-6"><label for="cardNumber" class="control-label">Card Number</label><input class="form-control" id="cardNumber" placeholder="Card Number" type="text"></div><div class="form-group col-sm-2" onclick="addCard();"><label class="control-label">Add card</label><p class="square-box" title="Add Card">+</p></div></form>';

  div.innerHTML = initialRow + newRow;

}
