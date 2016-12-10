$( document ).ready(function(){
    console.log( "ready!" );
		$('#add').click(function(){
			var text = $('#idea').val();
			if(text.length){
				$('<li/>', {html: text}).appendTo('#game-chat');
			}
			$('#game-form')[0].reset();
      setTimeout(function(){
        var li = document.createElement("LI");
        var response = document.createTextNode("Don't tell me you forgot our meeting today...");
        li.appendChild(response);
        document.getElementById("game-chat").appendChild(li);
      }, 1000);
      })
		});
		$("#game-form").submit(function(e) {
			e.preventDefault();
		});
});
