(function($){
	/*Prefetch elements here*/
	var elems = {};
	
	var sBase = function(){
		var self = this;
		
		jQuery.extend(self, {
			UI: {
				cleanUp: function(){
					$('html').removeClass('no-js');
					return this;
				},
				addFunction: function(item){
					
					return this;
				}
			},
			EXT: {}
		});
	}
	
	/*Before*/
	var init = new sBase();
	init.UI.cleanUp();

	/*After*/
	
})(jQuery);