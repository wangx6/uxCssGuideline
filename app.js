(function(jquery){
	'use strict';

	var data = {
		elements:[
			{
				cat:'button',
				name:'.nav-bar',
				css:{
					width:'100px', color:'red', 'background-color':'#ccc'
				}
			},
			{
				cat:'button',
				name:'.container',
				css:{
					width:'100px', color:'#000', 'background-color':'#09c'
				}
			},
			{
				cat:'header',
				name:'.header',
				css:{
					width:'100px', color:'#fff', 'background-color':'green'
				}
			},
			{
				cat:'panle,', 
				name:'.footer',
				css:{
					width:'100px', color:'blue', 'background-color':'#887'
				}
			},
			{
				cat:'button',
				name:'.login-submit-button',
				css:{
					width:'100px', color:'red', 'background-color':'#ccc'
				}
			},
			{
				cat:'button',
				name:'.save-button',
				css:{
					width:'100px', color:'#000', 'background-color':'#09c'
				}
			},
			{
				cat:'button',
				name:'.commit-bet-button',
				css:{
					width:'100px', color:'#fff', 'background-color':'green'
				}
			},
			{
				cat:'panel', 
				name:'.footer',
				css:{
					width:'100px', color:'blue', 'background-color':'#887'
				}
			},{
				cat:'panel',
				name:'.banner',
				css:{
					width:'100px', color:'red', 'background-color':'#ccc'
				}
			},
			{
				cat:'panel',
				name:'.article',
				css:{
					width:'100px', color:'#000', 'background-color':'#09c'
				}
			},
			{
				cat:'nav, button',
				name:'.nav-button',
				css:{
					width:'100px', color:'#fff', 'background-color':'green'
				}
			},
			{
				cat:'panle', 
				name:'footer-sub-block',
				css:{
					width:'100px', color:'blue', 'background-color':'#887'
				}
			}
		]
	};

	var uxHandler = new UXGuidelineHandler(data);

})(window.jQuery);