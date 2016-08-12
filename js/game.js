jQuery(document).ready(function($) {
    // pocetak
	$("#start").on("click", function() {
    // nasumicna vrednost koju kompijuter bira koristeci ovu funkciju
    $("#randomValue").val(Math.ceil(Math.random() * 10));
    $("#guessText").html("Please guess the generated number!");
    $("#guessSection").show("fade"); // prikazuje sadrzaj bitan za igraca(korisnika)
    $('#start').hide('fast'); // sakriva dugme "Start"
    $('#playAgain').show(); // prikazuje dugme "Play Again"
});
    // funkcija za komparaciju rezultata
	$("#compare").on("click", function() {
    	if (isNaN($("#userInput").val())) {
        	$("#guessText").html("This is not a number. Please, write a number!");
    	} else if (parseInt($("#userInput").val()) < 1 || parseInt($("#userInput").val()) > 10) {
        	$("#guessText").html("Remember, your number must be between 1 and 10!");
    	} else {
        	if(parseInt($("#userInput").val()) == $("#randomValue").val()) {
            	$("#guessText").html("Correct! :D");
        	} else if(parseInt($("#userInput").val()) < $("#randomValue").val()) {
            	$("#guessText").html("Incorrect! Too low!");
        	} else {
                $("#guessText").html("Incorrect! Too high!");
            }
    	}
	});
	// da se "Go!" vrednosti potvrdjuju i na "Enter"
	$("#userInput").keyup(function(event){
    	if(event.keyCode == 13){
        	$("#compare").click();
    	}
	});
    // playAgain dugme refresuje celu stranu
    $('#playAgain').on('click', function() {
        location.reload();
    });
});


