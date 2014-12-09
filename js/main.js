var $win = $(window);
var $mainBannerSection = $('.main-banner-section');
$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	$mainBannerSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});

