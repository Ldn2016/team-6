var x = false;
var random = false;
$( document ).ready(function(){
		var x = false;
		$('#add').click(function(){
			var text = $('#idea').val();
			if(text.length){
				var node = document.createElement("LI");
				node.className = "game-message";
				if (random) {
					var textnode = document.createTextNode("The rain in spain");
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
			var i = $('#counter').val();
			i++;
			$('#counter').val(i);
			if (random) {
				random = false;
				setTimeout(function(){
		      var li = document.createElement("LI");
					var counter = Math.round(Math.random()*3);
					var responses = ["Your acting out of character!",
													 "Where did that come from??",
													 "Whats going on with you?",
													 "No need for that!"];
					var response = document.createTextNode(responses[counter]);
					li.className = "game-messageR";
		      li.appendChild(response);
		      document.getElementById("game-chat").appendChild(li);
		    }, 2000);
			} else if (!x) {
				x = true;
		    setTimeout(function(){
		      var li = document.createElement("LI");
					var responses = ["Are we still on for today?",
													 "Don't tell me you forgot our meeting today...",
												 	 "You ditching me again?",
												 	 "I am very sad..."];
					var response = document.createTextNode(responses[i]);
					li.className = "game-messageR";
		      li.appendChild(response);
		      document.getElementById("game-chat").appendChild(li);
		    }, 2000);
			};
			setTimeout(function(){
				x = false;
			}, 4000);
     });
});

setInterval(setRandom, 20000);

function setRandom(){
	random = true;
}