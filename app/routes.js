// app/routes.js

var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
var orm = require("../config/orm.js");
var post = require("../models/post.js");



var path = require("path");
module.exports = function(app, passport) {

    // =====================================

    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {

        post.selectAll(function(data) {

            var hbsObject = {
                post: data
                // user: req.user
            };
            console.log(hbsObject);

            res.render('index.handlebars', hbsObject); // load the index.handlebars file
            
        });
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.handlebars', { message: req.flash('loginMessage') });
        // res.render('login.html', { message: req.flash('loginMessage') });
        // res.sendFile(path.join(__dirname, "login.html"), { message: req.flash('loginMessage') } );

    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/profile', // redirect to the secure profile section
            failureRedirect: '/login', // redirect back to the signup page if there is an error
            failureFlash: true // allow flash messages
        }),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
            res.redirect('/');
        });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.handlebars', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =========================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {

        post.getMyBlogs(req.user.id, function(data) {

            var hbsObject = {
                post: data,
                user: req.user
                // user: req.user
            };
            // console.log(hbsObject);
            console.log(req.user.id + " req.user.id )))")

            res.render("profile.handlebars", hbsObject);


        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    	    // Posting Section=========================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)


    app.post('/api/post/:id', isLoggedIn, function(req, res) {
    	 // app.post('/api/post/:id', function(req, res) {


    	    var title = req.body.title;
        	var content = req.body.content;
        	var tags = req.body.tags;
        	var status = req.body.status;
           	var createTime = req.body.createTime;
        	var authorId = req.params.id;

        	console.log(authorId + " this is the authorid")
        	console.log(content + " this is the content")

        post.addBlogPost(title, content, tags, status, createTime, authorId, function() {

        	



            // var hbsObject = {
            //     post: data,
            //     user: req.user
            //     // user: req.user
            // };
            // console.log(hbsObject);
            // console.log(req.user.id + " req.user.id )))")

            // res.render("profile.handlebars", hbsObject);


        });
    });

};



// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())

        return next();

    // if they aren't redirect them to the home page
    console.log("redirect due to not logged in")
    res.redirect('/');
}