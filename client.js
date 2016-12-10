$( document ).ready(function(){
    console.log( "ready!" );
		$('#add').click(function(){
			var text = $('#idea').val();
			if(text.length){
				var node = document.createElement("LI");  
				node.className = "game-message";
				var textnode = document.createTextNode(text);         
				node.appendChild(textnode);                              
				document.getElementById("game-chat").appendChild(node);
			}
			$('#game-form')[0].reset();
		});
		$("#game-form").submit(function(e) {
			e.preventDefault();
		});
});
