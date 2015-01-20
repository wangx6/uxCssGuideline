(function( $, window ){
	'use strict';

	var DataHandler = function(){
		this.data;
	};

	DataHandler.prototype.http = function(url, reqType, callback, inputData){
		
		var requestMap = {
			url: url,
			type:reqType,
			dataType:'json',
			success: function( data ){
				callback( data );
			}
		};

		if( inputData ) requestMap.data = inputData;
		$.ajax( requestMap ).fail(function( err ){ console.log( err ); });
		return this;
	};

	window.DataHandler = DataHandler;

})(window.jQuery, window);