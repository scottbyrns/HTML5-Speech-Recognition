com.scottbyrns.SpeechRecognition.Recognizer({
	setup: function () {
		
		
		// <input type="text" id="speach-input" />
		
		var input = document.createElement("input");
	    
		input.setAttribute("type", "text");
		// input.style.display = "none";
		input.setAttribute("id", "speach-input");
		
	    document.body.appendChild(input);
		
		
	},
	constructor: function () {
		
	    this.recognition = new webkitSpeechRecognition();
	    this.recognition.continuous = true;
	    this.recognition.interimResults = true;
		this.autorestart = true;
		
		this.recognition.onstart = this.onstart;
		this.recognition.onerror = this.onerror;
		this.recognition.onresult = this.onresult;

	},
	prototype: {
		onstart: function () {
	        console.log("Start");
		},
		onerror: function () {
	        console.log("Error");
		},
		onend: function () {
			console.log("End");
			if (this.autorestart) {
		        console.log("Restarting");
		        this.recognition.start();
			}
		},
		onresult: function () {
	        console.log("Result");
	        var interim_transcript = '';
	        var final_transcript = '';

	        for (var i = event.resultIndex; i < event.results.length; ++i) {
	            if (event.results[i].isFinal) {
	                final_transcript += event.results[i][0].transcript;
	            } else {
	                interim_transcript += event.results[i][0].transcript;
	            }
	        }

			if (final_transcript != "")
			{
	            document.getElementById("speach-input").value = (final_transcript);
	        }

		},
		start: function () {
			this.recognition.start();
		}
	}
});

