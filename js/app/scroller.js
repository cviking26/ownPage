App.scroller = {
    init : function(){
		$('#main .bubble').pep({
			useCSSTranslation: false,
			constrainTo: 'parent'
		});
		this.overlay();
    },

	overlay : function(){
		$('.bubble').on('click', function(){
			var reqBubble = this.id || false;

			if(this.id)
				App.scroller.getContent(reqBubble);
		});
	},

	showOverlay : function(data){
			console.log(data);
	},

	getContent : function(reqBubble){
		$.ajax({
			url 	:	'data.php',
			params	:	reqBubble,
			type	:	'POST',
			success	:	function(data){
				App.scroller.showOverlay(data);
			}
		});
	}
}