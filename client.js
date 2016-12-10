$( document ).ready(function(){
    console.log( "ready!" );
		$('#add').click(function(){
			var text = $('#idea').val();
			if(text.length){
				$('<li />', {html: text}).appendTo('#game-chat');
			}
		});
		$("#game-form").submit(function(e) {
			e.preventDefault();
		});
});
