!function(jquery){
	'use strict';

	var dataHandler = new DataHandler();
	var uxHandler = new UXGuidelineHandler();
	dataHandler.http('data/data.json', 'GET', function( data ){
		uxHandler.init(data);
	});

}(window.jQuery);