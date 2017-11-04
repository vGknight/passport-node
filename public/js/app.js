// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#myForm").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        console.log("submit pushed");

        event.preventDefault();

        var newBlogPost = {
            title: $("#blog-title").val().trim(),
            content: $("#blog-content").val().trim(),
            status: "",
            createTime: '2017-01-19 03:14:07'


        };

        console.log(newBlogPost);

        // Send the POST request.
        $.ajax("/api/post", {
            type: "POST",
            data: newBlogPost
        }).then(
            function() {
                console.log("post Added...");
                // Reload the page to get the updated list - this sucks
                location.reload();


            }
        );
    });

    // $("#myForm").on("submit", function(event) {
    //     // Make sure to preventDefault on a submit event.
    //     console.log("submit pushed");

    //     event.preventDefault();

    //     var newBlogPost = {
    //         title: $("#blog-title").val().trim(),
    //         content: $("#blog-content").val().trim(),
    //         status: "",
    //         createTime: '2017-01-19 03:14:07'


    //     };

    //     console.log(newBlogPost);

    //     // Send the POST request.
    //     $.ajax("/api/post", {
    //         type: "POST",
    //         data: newBlogPost
    //     }).then(
    //         function() {
    //             console.log("post Added...");
    //             // Reload the page to get the updated list - this sucks
    //             location.reload();


    //         }
    //     );
    // });


    // $(".blog-post").on("click", function(event) {
    //     console.log("Blog selected");


    // })

    $("#comment-button").on("click", function(event) {
        console.log("comment submitted");

        

        event.preventDefault();

        var newComment = {
            comment: $("#comment-field").val().trim(),
            // content: $("#blog-content").val().trim(),
            // status: "",
            createTime: '2017-01-19 03:14:07',
            postId: 22 // testing


        };

        console.log(newComment);

        // Send the POST request.
        $.ajax("/api/comment", {
            type: "POST",
            data: newComment
        }).then(
            function() {
                console.log("comment Added...");
                // Reload the page to get the updated list - this sucks
                location.reload();


            }
        );
        // var id = $(this).data("id");

        // var devoured = {
        //     devoured: 1
        // };

        // // Send the PUT request.
        // $.ajax("/api/update/" + id, {
        //     type: "PUT",
        //     data: devoured
        // }).then(
        //     function() {
        //         console.log("Burger is now eaten!", devoured);
        //         // Reload the page to get the updated list
        //         location.reload();

        //     }
        // );
    });
    // });


});