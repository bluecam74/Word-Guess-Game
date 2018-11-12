$(document).ready(function () {




    wordBank = ["FORD", "CHEVROLET", "DODGE", "NISSAN", "MAZDA", "TOYOTA", "HONDA", "PORSCHE", "JEEP", "DATSUN", "CHRYSLER", "LOTUS", "TESLA", "AUDI", "MERCEDES"];

    var letterBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // document.getElementById("fname").onkeyup = function() {myFunction()};
    var randomWord = "";
    var blankWord = "";
    var totalWins = 0;
    var totalLosses = 0;
    var guessesRemaining = 12;

    $(".losses").append(totalLosses);
    $(".wins").append(totalWins);

    function wordGenerator() {
        randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log(randomWord);
        blankWord = ("_").repeat(randomWord.length);
        blankWordArray = blankWord.split("")
        $(".guessingLine").append(blankWordArray);
        guessesRemaining = 12;
        $(".guessesRemaining").append(guessesRemaining);
    }


    document.onkeyup = function trackGuesses(e) {
        var entry = (e.key).toUpperCase();
        randomWordArray = randomWord.split("")
        if (letterBank.includes(entry)) {
            e.preventDefault();
            $(".guesses").append(entry + " ");
        }
        if (randomWord.includes(entry)) {
            e.preventDefault();
            for (var i = 0; i < randomWord.length; i++) {
                if (entry === randomWordArray[i]) {
                    (blankWordArray[i]) = entry;
                    $(".guessingLine").empty();
                    $(".guessingLine").append(blankWordArray);
                }
            }
            didYouWin();
        }
        else if (letterBank.includes(entry)) {
            wrongAnswer();
        }
    }

    function wrongAnswer() {
        guessesRemaining--;
        $(".guessesRemaining").empty();
        $(".guessesRemaining").append("Number of guesses remaining: " + guessesRemaining);
        if (guessesRemaining === 0) {
            didYouLose();
        }
    }

    function didYouWin() {
        if (!(blankWordArray).includes("_")) {
            totalWins++;
            $(".wins").empty();
            $(".wins").append("Wins: " + totalWins);
            $(".guessesRemaining").empty();
            $(".guessesRemaining").append("Number of guesses remaining: ");
            $(".guessingLine").empty();
            $(".guesses").empty();
            wordGenerator();
        }
    }
    function didYouLose() {
        totalLosses++;
        $(".losses").empty();
        $(".losses").append("Losses: " + totalLosses);
        $(".guessesRemaining").empty();
        $(".guessesRemaining").append("Number of guesses remaining: ");
        $(".guessingLine").empty();
        $(".guesses").empty();
        wordGenerator();
    }

    $(".restart").on("click", function () {
        location.reload();

    });


    wordGenerator();












});