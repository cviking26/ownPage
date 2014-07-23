App.scroller = {
    init : function(){
		$('#main .bubble').pep({
			useCSSTranslation: false,
			constrainTo: 'parent'
		});
		App.scroller.overlay();
    },

	overlay : function(){
		$('.bubble').on('click', function(){
			var reqBubble = this.id || false;

			if(this.id)
				App.scroller.getContent(reqBubble);
		});
	},

	showOverlay : function(data){
			$('#content-wrap').css('display', 'block');
			$('#content-inner').html(data);
	},

	getContent : function(reqBubble){
		reqBubble = reqBubble.toString();
		$.ajax({
			url 		:	'data.php',
			data		:	{'reqBubble' : reqBubble},
			type		:	'POST',
			success		:	function(data){
				App.scroller.showOverlay(data);
			}
		});
	}
}