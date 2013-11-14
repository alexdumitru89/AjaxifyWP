/* 
  Author: Alex Dumitru
  Website: http://www.alexdumitru.eu
  License: Free to use and distribute
*/
jQuery(document).ready(function($) {
	$main = $('main');
	$toLoad(' main>*');
	loadPage = function(href,push) {
		if (push) history.pushState('', '', href);
			$main.load(href + $toLoad, function(html) {
			document.title = $(html).filter('title').text();
		}
	}
	$(window).on("popstate", function(e) {
		if (e.originalEvent.state !== null) {
			loadPage(location.href,false);
			e.preventDefault();
		}
	});
	$(document).on("click", "a, area", function(e) {
		var href = $(this).attr("href");
		if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
			loadPage(href,true);
			e.preventDefault();
			return false;
		}
	});
});
