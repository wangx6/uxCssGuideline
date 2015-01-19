( function( $, window ){
	'use strict';

	var Item = function( data ){
		this.data = data;
		this.ctnr = $('<div>');
		this.title = $('<h3>');
		this.expandBox = $('<div>');

		this.init();
	};

	Item.prototype.init = function(){
		
		var self = this,
			i;

		this.title
			.html( self.data.name )
			.appendTo( self.ctnr );

		$('<li>')
			.html('{')
			.appendTo( self.ctnr );
		for(i in this.data.css){
			$('<li>')
				.addClass('css-item')
				.html( i+': '+this.data.css[i]+';' )
				.appendTo( self.ctnr );
		}
		$('<li>')
			.html('}')
			.appendTo( self.ctnr );
	};



	window.Item = Item;

} )(window.jQuery, window);