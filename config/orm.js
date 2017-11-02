var cnx = require('./connection.js');

console.log("orm.js loaded");


var orm = {

    selectAll: function(whatToSelect, tableInput, cb) {

        var queryString = "SELECT " + whatToSelect + " FROM ??";
        cnx.query(queryString, tableInput, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);

        });


    },
    getMyBlogs: function(authorId, cb) {

        var queryString = "SELECT id, title, content, tags, status, createTime, updateTime, authorId FROM blog_db.post WHERE ?";

        cnx.query(queryString
            , [
            //where statement
            { authorId: authorId }
        ]
        , function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);

        });


    },



    // insertOne: function(table, burgers_name, devoured, cb) {

    //     var queryString = "INSERT INTO " + table + " SET ?";

    //     var newBurger = {
    //         burgers_name: burgers_name,
    //         devoured: devoured
    //     };
    //     cnx.query(queryString, newBurger, function(err, result) {

    //         if (err) {
    //             throw err;
    //         }

    //         cb(result);
    //     });

    // },

    //for blog

        addBlogPost: function(title, content, tags, status, createTime, authorId, cb) {

        var queryString = "INSERT INTO blog_db.post SET ?";

        var newBlogPost = {
            title: title,
            content: content,
            tags: tags,
            status: status,
            createTime: createTime,
            authorId: authorId
        };

        console.log(queryString);
        console.log(newBlogPost);

        cnx.query(queryString, newBlogPost, function(err, result) {

            if (err) {
                throw err;
            }

            cb(result);
        });

    },

    updateOne: function(table, item_id, devoured, cb) {

        var queryString = "UPDATE " + table + " SET ? WHERE ?";

        cnx.query(queryString, [{ devoured: devoured, },
                //WHERE Clause
                { id: item_id }
            ],

            function(error, results) {
                if (error) throw error;
                cb(results);

            });


    }


}


module.exports = orm;