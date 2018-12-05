$(document).ready(function () {
    var correct = 0;
    var incorrect = 0;
    var t = 30;
    var interval;
    $("#start").on("click", function () {
        interval = setInterval(function () {
            t--
            $("#time").html(t);
            if (t === 0) {
                //time over
                clearInterval(interval);
                checkWhen();
            }
        }, 1000);

    });





    var checkWhen = function () {
        var a1 = $("input[name='Check1']:checked").val();
        var a2 = $("input[name='Check2']:checked").val();
        var a3 = $("input[name='Check3']:checked").val();
        var a4 = $("input[name='Check4']:checked").val();
        var a5 = $("input[name='Check5']:checked").val();
        var a6 = $("input[name='Check6']:checked").val();
        var a7 = $("input[name='Check7']:checked").val();
        var a8 = $("input[name='Check8']:checked").val();
        var a9 = $("input[name='Check9']:checked").val();
        console.log(a1);

        if (a1 === "detectiveComics") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (a2 === "mercury") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (a3 === "lego") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (a4 === "house") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (a5 === "multimedia") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (a6 === "medellin") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (a7 === "giraffe") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (a8 === "shredded") {
            correct++;
        }
        else {
            incorrect++;
        }
        if (a9 === "right") {
            correct++;
        }
        else {
            incorrect++;
        }
 
        $("#right").html(correct);
        $("#wrong").html(incorrect)
    };




    $("#submit").on("click", function () {
        
        checkWhen();
    });



});