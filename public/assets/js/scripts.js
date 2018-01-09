$(function() {


    $(".burgerAvailable").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id)
        var newSleep = $(this).data("newsleep");

        var newDevoured = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function() {
                console.log("changed Devoured to True");
                location.reload();
            }
        );
    });

    //     $("#submit").on("click", function(event) {
    //         event.preventDefault();

    //         var newBurger = {
    //             burger_name: $("#newBurger").val().trim(),
    //             devoured: 0
    //         };

    //         $.ajax("/api/burgers", {
    //             type: "POST",
    //             data: newBurger
    //         }).then(
    //             function() {
    //                 location.reload();
    //             }
    //         );

    //     });
});