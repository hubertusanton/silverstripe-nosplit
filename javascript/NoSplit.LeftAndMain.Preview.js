(function($) {

	$.entwine(

		'ss.preview', function($){
			$('.cms-preview').entwine({
					DefaultMode: 'content',
					onmatch: function() {
						// no split, also not before this. Default to content. 
						if ( this.loadState('mode') == 'split') {
							this.changeMode('content', true);
						}
						this._super();					
					}
																			
				}
			);
		
		}
	);
}(jQuery));




