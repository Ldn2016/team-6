var x = false;
var random = false;
var done = false;
$( document ).ready(function(){
		var x = false;
		$('#add').click(function(){
			var text = $('#idea').val();
			if(text.length){
				var node = document.createElement("LI");
				node.className = "game-message";
				if (random) {
					var counter = Math.round(Math.random()*3);
					var responses = ["I need to get bread from the shops.",
													 "I only slept for two hours last night!",
													 "Just back off!",
													 "I don't know what your talking about?"];
					var textnode = document.createTextNode(responses[counter]);
				} else {
					var textnode = document.createTextNode(text); 
				}
				node.appendChild(textnode);                              
				document.getElementById("game-chat").appendChild(node);
				document.getElementById("game-chat").scrollTop = document.getElementById("game-chat").scrollHeight;
			}
			$('#game-form')[0].reset();
			$("#game-form").submit(function(e) {
				e.preventDefault();
			});
			if (random) {
				random = false;
				setTimeout(function(){
		      var li = document.createElement("LI");
					var counter = Math.round(Math.random()*3);
					var responses = ["Your acting out of character!",
													 "Where did that come from?",
													 "Whats going on with you?",
													 "Why did you say that?"];
					var response = document.createTextNode(responses[counter]);
					li.className = "game-messageR";
		      li.appendChild(response);
		      document.getElementById("game-chat").appendChild(li);
					document.getElementById("game-chat").scrollTop = document.getElementById("game-chat").scrollHeight;
		    }, 2000);
			} else if (!x || !done) {
				var i = $('#counter').val();
				i++;
				$('#counter').val(i);
				x = true;
		    setTimeout(function(){
		      var li = document.createElement("LI");
					var responses = ["Are we still on for today?",
													 "Don't tell me you forgot our meeting today...",
												 	 "You ditching me again?",
												 	 "I am very sad...",
													 "I'm tired I need to go.",
													 "Bye."];
					var response = document.createTextNode(responses[i]);
					if (i === 6) {
						done = true;
					}
					li.className = "game-messageR";
		      li.appendChild(response);
		      document.getElementById("game-chat").appendChild(li);
					document.getElementById("game-chat").scrollTop = document.getElementById("game-chat").scrollHeight;
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