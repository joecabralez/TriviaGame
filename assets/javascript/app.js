//buttons
//start button
$('#startButton').on('click', function() {
    game.start();
})
//submit button
$(document).on('click', '#submit', function() {
    game.done();
})
//reset button
$(document).on('click', '#reset', function() {
    location.reload();
})


//questions object
var questions = [{
//question 1
    question: "Where was Beyoncé born?",
    answers: [" Los Angeles ", " Houston ", " NYC ", " London "],
    correctAnswer: " Houston ",
}, {
//question 2
    question: "What is Beyoncé's middle name?",
    answers: [" Giselle ", " Tina ", " Rhonda ", " No Middle Name "],
    correctAnswer: " Giselle ",
}, {
//question 3
    question: "Who is Beyoncé's sister?",
    answers: [" Kelly ", " Michelle ", " Latoya ", " Solange "],
    correctAnswer: " Solange "
}, {
//question 4   
    question: "How many GRAMMYs does she have?",
    answers: [" 20 ", " 15 ", " 11 ", " 8 "],
    correctAnswer: " 20 ",
}, {
//question 5
    question: "What year did she marry Jay Z?",
    answers: [" 1999 ", " 2001 ", " 2007 ", " 2008 "],
    correctAnswer: " 2008 ",
}, {
//question 6
    question: "Which is her best album?",
    answers: [" Beyoncé ", " Lemonade ", " Dangerously in Love ", " All of the above "],
    correctAnswer: " All of the above "
}];

//game logic 
//counter
var game = {
    correct: 0,
    incorrect: 0,
    counter: 90,
    
//counter function
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            game.done();
        }
    },
//questions load after hitting start button    
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $('.time').prepend('<h2 class="text-danger">Time Remaining: <span id="counter"> 90</span> Seconds</h2>');
        $(".start-button").remove();
        for (var i = 0; i < questions.length; i++) {
            $('.questions').append('<h2 class="text-primary">' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $(".questions").append("<input type='radio' name='question-" + i + "'value ='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $(".questions").append('<br><br><button class="btn btn-success" id="submit">Submit</button>');

    },
//checking for correct answers 
    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
                if ($(this).val() == questions[0].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-1']:checked"), function() {
                if ($(this).val() == questions[1].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-2']:checked"), function() {
                if ($(this).val() == questions[2].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-3']:checked"), function() {
                if ($(this).val() == questions[3].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),
            $.each($("input[name='question-4']:checked"), function() {
                if ($(this).val() == questions[4].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }),

            $.each($("input[name='question-5']:checked"), function() {
                if ($(this).val() == questions[5].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });

        this.results();
    },

//display results
	results: function() {
        clearInterval(timer);
        $('.questions').remove();
        $('.time').remove();
        $('.results').append("<h3 class='text-success'>Correct: " + this.correct + "</h3>");
        $('.results').append("<h3 class='text-primary'>Incorrect: " + this.incorrect + "</h3>");
        $('.results').append("<h3 class='text-muted'>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    //created button manually after results are displayed    
        $(".results").append('<br><button class="btn btn-success" id="reset">RESET</button>');

    }
}