// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
$("#myForm").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        console.log("submit pushed");

        event.preventDefault();

        var newBlogPost = {
            title: $("#blog-title").val().trim(),
            content: $("#blog-content").val().trim(),
            status : "",
            createTime : '2017-01-19 03:14:07'


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

});
    