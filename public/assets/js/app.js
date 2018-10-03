    $(function() {
        $(".change-eat").on("click", function(event) {
            var id = $(this).data("id");
            var newEat = $(this).data("neweat");

            var devourStatus = {
                devoured: newEat
            };

            $.ajax("/api/plants/" +id, {
                type: "PUT",
                data: devourStatus
            }).then(
                function() {
                    // reloads page to update immediately
                    location.reload();
                }
            );
        });

        
        // creates the form
        $(".create-form").on("submit", function(event) {
            event.preventDefault();
            
            // funtion to validate form
            function validateForm() {
                let isValid = true;
                $("#plantName").each(function() {
                    if ($(this).val() === "") {
                        isValid = false;
                    }
                });
                return isValid;
            }
            
            // if statement that checks first
            if(validateForm()) {

                // creates the new plant name to be sent to controller
                var newPlant = {
                    plant_name: $("#plantName").val().trim(),
                    devoured: false
                };

                $.ajax("/api/plants", {
                    type: "POST",
                    data: newPlant
                }).then(
                    function() {
                        location.reload();
                    }
                );
            } else {
                alert(`Please fill in a name.`)
            }
        });
    });