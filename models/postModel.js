var orm = require("../config/orm.js");

console.log("posts MOdel loaded");


var postModel = {


    selectAll: function(cb) {

        orm.selectAll("id, title, content, tags, status, createTime, updateTime, authorId", "post", function(result) {

            cb(result);

        });
    },

      getMyBlogs: function(id, cb) {

        orm.getMyBlogs(id, function(result) {

            cb(result);
            // console.log(result);

        });
    },
//update
    // insertOne: function(name, devoured, cb) {
    //     orm.insertOne("post", name, devoured, function(result) {

    //         cb(result);
    //     })
    // },



    //updated for blog pp
    addBlogPost: function(title, content, tags, status, createTime, authorId, cb) {

        console.log("thisis from the post.js " + authorId);
        orm.addBlogPost(title, content, tags, status, createTime, authorId, function(result) {

            cb(result);
        })
    },
//update
    updateOne: function(item_id, devoured, cb) {
        orm.updateOne("post", item_id, devoured, function(result) {

            cb(result);

        })



    }

}


module.exports = postModel;