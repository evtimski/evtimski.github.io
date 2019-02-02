/**
 * 
 */
$('nav.navbar li.dropdown').hover(function() {
	$(this).find('.dropdown-menu')
	.stop(true,true)
	.delay(200)
	.fadeIn(300);
	}, function() {
		$(this).find('.dropdown-menu')
		.stop(true,true)
		.delay(200)
		.fadeOut(500);
	});

window.onscroll = function(){fixMenuOnTop()};

var navBar = document.getElementById("mainMenu");
var topOffset = navBar.offsetTop;

function fixMenuOnTop() {
	if(window.pageYOffset >= topOffset){
		navBar.classList.add("sticky-top")
	}else{
		navBar.classList.remove("sticky-top")
	}
}