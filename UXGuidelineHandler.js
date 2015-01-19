(function($, window ){
	'use strict';


	var UXGuidelineHandler = function () {
		this.data;
		this.ctnr = $('.item-ctnr');
		this.items = [];
		this.filterInput = $('.filter-input');
		this.filterEles = $('.filter-input');
		this.numOfEles = $('.num-of-eles');
	};



	UXGuidelineHandler.prototype.init = function( data ){
		
		var input, i, item,
			self = this;

		this.data = data;
		this.filterInput.focus();
	
		for(i in data.elements){
			item = new Item(data.elements[i]);
			self.items.push( {item:item, isVisible: true });
			this.ctnr.append(item.ctnr);
		}

		this.filterInput.on('keyup',function(){
			input = self.filterInput.val();
			self.filter(input);
		});

		this.update();
	};



	UXGuidelineHandler.prototype.update = function () {
		
		var i, count = 0;

		for(i in this.items){
			if(this.items[i].isVisible) count += 1;
			this.items[i].item.ctnr.toggle( this.items[i].isVisible );
		}
		this.numOfEles.html('(' + count + ')');
		return this;
	};



	UXGuidelineHandler.prototype.filter = function( filterInput ){
		
		var i;

		if(filterInput == ''){
			this.reset();
		}else{
			for(i in this.items){
				this.items[i].isVisible = this.items[i].item.data.name.indexOf(filterInput) > -1 ||
										this.items[i].item.data.cat.indexOf(filterInput) > -1 ;
			}
		}
		
		return this.update();
	};



	UXGuidelineHandler.prototype.reset = function(){
		
		var i;

		for(i in this.items){
			this.items[i].isVisible = true;
		}
		return this;
	};

	window.UXGuidelineHandler = UXGuidelineHandler;

})( jQuery, window );