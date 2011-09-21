/*!
 * jQuery Extended v0.0.1 for jQuery v1.6.1
 * https://github.com/nathanbrauer/jQuery-Extended
 *
 * Copyright 2011, Nathan Brauer
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

(function($){

$.fn.textWidth = function(){
	var $this = $(this),
		html_original = $this.html(),
		id = window.location.href.replace(/[^a-z0-9]/gi, '');
		html_to_calculate = '<span id="'+id+'" style="padding: 0 !important; margin: 0 !important; white-space: nowrap !important;">' + html_original + '</span>';

	$this.html(html_to_calculate);
		var width = $this.find('#'+id).width();
	$this.html(html_original);

	return width;
};

})(jQuery);
