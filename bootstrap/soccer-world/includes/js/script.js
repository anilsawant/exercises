$( function() {

  show();  // Function call to show Navigation bar and GotoTop icon

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

/*..............................................................................
                      Function to switch navbar's class
..............................................................................*/
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
  if( y1 > 900 || y2 > 900 ) {
    document.getElementById('gototop').style.visibility = 'visible';

  }else {
    document.getElementById('gototop').style.visibility = 'collapse';
  }
}

// window.addEventListener('resize',function(){
//   var w = Math.max(document.documentElement.clientWidth);
//   document.getElementById('ding').innerHTML = w+10;
//
//   // if( $("[name='hero-panel']").length )
//   //   $("[name='hero-panel']").normalizeHeight();
//
// },true);


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

/*..............................................................................
                      Function to add card rows
..............................................................................*/
function addCard() {
  var div = document.getElementById('tab3');
  var initialRow = div.innerHTML;
  var newRow = '<form class="form-horizontal"><div class="form-group col-sm-4 "><label for="cardName" class="control-label">Card Name</label><input class="form-control" id="cardName" placeholder="Card Name" type="text"></div><div class="form-group col-sm-6"><label for="cardNumber" class="control-label">Card Number</label><input class="form-control" id="cardNumber" placeholder="Card Number" type="text"></div><div class="form-group col-sm-2" onclick="addCard();"><label class="control-label">Add card</label><p class="square-box" title="Add Card">+</p></div></form>';

  div.innerHTML = initialRow + newRow;

}

/*..............................................................................
                      Function to filter tiles
..............................................................................*/
function showTiles( which ) {

  var all = '  <!-- Row 1 --><div class="row clearfix">'
            + '<div class="col-sm-4 tile clearfix"><a href="http://www.fcbarcelona.com" target="_blank"><img src="img/soccer/barcelona.jpg" alt="" /><h3>Barcelona</h3></a><ul><li>Champions League</li><li>UEFA League</li><li>LA Liga</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.manutd.com" target="_blank"><img src="img/soccer/manu3.jpg" alt="" /><h3>Manchester United</h3></a><ul><li>Champions League</li><li>UEFA League</li><li>Barclays Premier League</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.arsenal.com" target="_blank"><img src="img/soccer/arsenal.jpg" alt="" /><h3>Arsenal</h3></a><ul><li>Barclays Premeir League</li></ul></div>'
            + '</div>'
            + '<!-- Row 2 --><div class="row">'
            + '<div class="col-sm-4 tile"><a href="http://www.tottenhamhotspur.com" target="_blank"><img src="img/soccer/tottenham.jpg" alt="" /><h3>Tottenham Hotspur</h3></a><ul><li>UEFA League</li><li>Barclays Premier League</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.fcbayern.de" target="_blank"><img src="img/soccer/bayern.jpg" alt="" /><h3>Bayern Munich</h3></a><ul><li>Champions League</li><li>UEFA League</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.chelseafc.com" target="_blank"><img src="img/soccer/chelsea.jpg" alt="" /><h3>Chelsea</h3></a><ul><li>UEFA League</li><li>Barclays Premier League</li></ul></div>'
            + '</div>'
            + '<!-- Row 3 --><div class="row">'
            + '<div class="col-sm-4 tile"><a href="http://www.juventus.com" target="_blank"><img src="img/soccer/juventus.jpg" alt="" /><h3>Juventus</h3></a><ul><li>Champions League</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.mcfc.com" target="_blank"><img src="img/soccer/mancity.jpg" alt="" /><h3>Manchester City</h3></a><ul><li>Champions League</li><li>Barclays Premier League</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.realmadrid.com" target="_blank"><img src="img/soccer/realmadrid.png" alt="" /><h3>Real Madrid</h3></a><ul><li>UEFA League</li><li>LA Liga</li></ul></div>'
            + '</div>';

  var bpl = '  <!-- Row 1 --><div class="row clearfix">'
            + '<div class="col-sm-4 tile"><a href="http://www.manutd.com" target="_blank"><img src="img/soccer/manu3.jpg" alt="" /><h3>Manchester United</h3></a><ul><li>Champions League</li><li>UEFA League</li><li>Barclays Premier League</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.arsenal.com" target="_blank"><img src="img/soccer/arsenal.jpg" alt="" /><h3>Arsenal</h3></a><ul><li>Barclays Premeir League</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.tottenhamhotspur.com" target="_blank"><img src="img/soccer/tottenham.jpg" alt="" /><h3>Tottenham Hotspur</h3></a><ul><li>UEFA League</li><li>Barclays Premier League</li></ul></div>'
            + '</div>'
            + '<!-- Row 2 --><div class="row">'
            + '<div class="col-sm-4 tile"><a href="http://www.chelseafc.com" target="_blank"><img src="img/soccer/chelsea.jpg" alt="" /><h3>Chelsea</h3></a><ul><li>UEFA League</li><li>Barclays Premier League</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.mcfc.com" target="_blank"><img src="img/soccer/mancity.jpg" alt="" /><h3>Manchester City</h3></a><ul><li>Champions League</li><li>Barclays Premier League</li></ul></div>'
            + '</div>';

  var cl = '  <!-- Row 1 --><div class="row clearfix">'
            + '<div class="col-sm-4 tile clearfix"><a href="http://www.fcbarcelona.com" target="_blank"><img src="img/soccer/barcelona.jpg" alt="" /><h3>Barcelona</h3></a><ul><li>Champions League</li><li>UEFA League</li><li>LA Liga</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.manutd.com" target="_blank"><img src="img/soccer/manu3.jpg" alt="" /><h3>Manchester United</h3></a><ul><li>Champions League</li><li>UEFA League</li><li>Barclays Premier League</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.fcbayern.de" target="_blank"><img src="img/soccer/bayern.jpg" alt="" /><h3>Bayern Munich</h3></a><ul><li>Champions League</li><li>UEFA League</li></ul></div>'
            + '</div>'
            + '<!-- Row 2 --><div class="row">'
            + '<div class="col-sm-4 tile"><a href="http://www.juventus.com" target="_blank"><img src="img/soccer/juventus.jpg" alt="" /><h3>Juventus</h3></a><ul><li>Champions League</li></ul></div>'
            + '<div class="col-sm-4 tile"><a href="http://www.mcfc.com" target="_blank"><img src="img/soccer/mancity.jpg" alt="" /><h3>Manchester City</h3></a><ul><li>Champions League</li><li>Barclays Premier League</li></ul></div>'
            + '</div>';
  var laliga = '  <!-- Row 1 --><div class="row clearfix">'
              + '<div class="col-sm-4 tile clearfix"><a href="http://www.fcbarcelona.com" target="_blank"><img src="img/soccer/barcelona.jpg" alt="" /><h3>Barcelona</h3></a><ul><li>Champions League</li><li>UEFA League</li><li>LA Liga</li></ul></div>'
              + '<div class="col-sm-4 tile"><a href="http://www.realmadrid.com" target="_blank"><img src="img/soccer/realmadrid.png" alt="" /><h3>Real Madrid</h3></a><ul><li>UEFA League</li><li>LA Liga</li></ul></div>'
              + '</div>';

  var uefa = '  <!-- Row 1 --><div class="row clearfix">'
              + '<div class="col-sm-4 tile clearfix"><a href="http://www.fcbarcelona.com" target="_blank"><img src="img/soccer/barcelona.jpg" alt="" /><h3>Barcelona</h3></a><ul><li>Champions League</li><li>UEFA League</li><li>LA Liga</li></ul></div>'
              + '<div class="col-sm-4 tile"><a href="http://www.manutd.com" target="_blank"><img src="img/soccer/manu3.jpg" alt="" /><h3>Manchester United</h3></a><ul><li>Champions League</li><li>UEFA League</li><li>Barclays Premier League</li></ul></div>'
              + '<div class="col-sm-4 tile"><a href="http://www.tottenhamhotspur.com" target="_blank"><img src="img/soccer/tottenham.jpg" alt="" /><h3>Tottenham Hotspur</h3></a><ul><li>UEFA League</li><li>Barclays Premier League</li></ul></div>'
              + '</div>'
              + '<!-- Row 2 --><div class="row">'
              + '<div class="col-sm-4 tile"><a href="http://www.chelseafc.com" target="_blank"><img src="img/soccer/chelsea.jpg" alt="" /><h3>Chelsea</h3></a><ul><li>UEFA League</li><li>Barclays Premier League</li></ul></div>'
              + '<div class="col-sm-4 tile"><a href="http://www.realmadrid.com" target="_blank"><img src="img/soccer/realmadrid.png" alt="" /><h3>Real Madrid</h3></a><ul><li>UEFA League</li><li>LA Liga</li></ul></div>'
              + '</div>';

  var league1 = {};
  league1.name = 'all';
  league1.value = all;

  var league2 = {};
  league2.name = 'bpl';
  league2.value = bpl;

  var league3 = {};
  league3.name = 'cl';
  league3.value = cl;

  var league4 = {};
  league4.name = 'laliga';
  league4.value = laliga;

  var league5 = {};
  league5.name = 'uefa';
  league5.value = uefa;

  var obj = [];
  obj.push(league1);
  obj.push(league2);
  obj.push(league3);
  obj.push(league4);
  obj.push(league5);
  var wrapper = document.getElementById('tiles-wrapper');
  for( var i=0; i < obj.length; i++) {
    if( which.id == obj[i].name ) {
      wrapper.innerHTML = obj[i].value;
      break;
    }
  }

}
