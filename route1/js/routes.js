
(function() {
	window.lingxe = {};
	init();
	function init() {
		$('.nav').find('a').each(function () {
			$(this).click(function(){
			  	if ($(this).attr('module')) {
	            	showModule($(this).attr('module'));
	        	}
			  	$('.ta_calendar').remove();
			});
	        
	    });
	    showModule("main1");
	}
	function showModule(module) {
		var jqxhr = $.ajax("page/" + module +".html")
			.done(function(data) {
			  	$('#mainContent').empty().append($(data));
				$('#mainContent').find('.content-wrap').css("height", $('#mainContent').height());
			  	lingxe[module].init();
		  	})
		  	.fail(function() {
		  	});
	}
})();