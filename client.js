$( document ).ready(function(){
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
			$("#game-form").submit(function(e) {
				e.preventDefault();
			});
      setTimeout(function(){
        var li = document.createElement("LI");
        var response = document.createTextNode("Don't tell me you forgot our meeting today...");
				li.className = "game-messageR";
				var x = document.createElement("LI").innerHeight;
				var div = document.createElement("div");
				div.style.height = x;
        li.appendChild(response);
				div.append(li);
        document.getElementById("game-chat").appendChild(div);
      }, 2000);
     });
});
