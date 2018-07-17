    $(function() {
        $(".change-eat").on("click", function(event) {
            var id = $(this).data("id");
            var newEat = $(this).data("neweat");

            var devourStatus = {
                devoured: newEat
            };

            $.ajax("/api/burgers/" +id, {
                type: "PUT",
                data: devourStatus
            }).then(
                function() {
                    console.log("Changed eatten status to", newEat);
                    location.reload();
                }
            );
        });

        $(".create-form").on("click", function(event) {
            event.preventDefault();
        console.log("hello world");

            var newBurger = {
                burger_name: $("#burgerName").val().trim(),
                devoured: false
            };

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function() {
                    console.log("New Burger Created");
                    location.reload();
                }
            );
        });
    });