var x = false;
var random = false;
$( document ).ready(function(){
		$('#add').click(function(){
			var text = $('#idea').val();
			if(text.length){
				var node = document.createElement("LI");  
				node.className = "game-message";
				if (random) {
					var textnode = document.createTextNode("YOU SMELL!");
					random = false;
				} else {
					var textnode = document.createTextNode(text); 
				}
				node.appendChild(textnode);                              
				document.getElementById("game-chat").appendChild(node);
			}
			$('#game-form')[0].reset();
			$("#game-form").submit(function(e) {
				e.preventDefault();
			});
			if (!x) {
				x = true;
				setTimeout(function(){
					var li = document.createElement("LI");
					var response = document.createTextNode("Don't tell me you forgot our meeting today...");
					li.className = "game-messageR";
					li.appendChild(response);
					document.getElementById("game-chat").appendChild(li);
				}, 2000);
				setTimeout(function(){
					x = false;
				}, 4000);
			}
     });
});

setInterval(setRandom, 20000);

function setRandom(){
	random = true;
}

function test() {
	document.getElementById("idea").value = "My Value";
}