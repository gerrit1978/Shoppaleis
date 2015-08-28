/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


Drupal.behaviors.headerblock = 
{
	attach: function(context, settings)
	{
		var width = $(window).width();
		if (width > 1020)
		{
			$('.block-header').animate(
				{
					opacity: 1,
					bottom: '1.75em'
				}
			, 400);
		} 
	}
}


Drupal.behaviors.organisatoren = 
{
	attach: function(context, settings)
	{
		$('.block-front-bottom .organisator .inner').hover(function() {
			$(this).find('.green').animate({opacity: 0.95}, 500);
			$(this).find('.text').animate({opacity: 1}, 200);							
		}, function() {
			$(this).find('.text').animate({opacity: 0});
			$(this).find('.green').animate({opacity: 0});
		});
	}
}


Drupal.behaviors.responsiveMenu =
{
	attach: function(context, settings)
	{
		$('ul.menu a.responsive').click(function(e) {
			var height = $('#block-system-main-menu ul.menu').css('height');
			if (height == '40' || height == '40px')
			{
				$('#block-system-main-menu ul.menu').css('height', 'auto');
			} else
			{
				$('#block-system-main-menu ul.menu').css('height', '40');
			}
			e.preventDefault();
			return false;
		});
	}
}


})(jQuery, Drupal, this, this.document);