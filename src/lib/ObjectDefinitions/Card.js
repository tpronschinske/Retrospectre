// /* eslint-disable */
/* global Card: true */

/* If you want to make cards in a more interesting way
var myCard = new Card()
                .inRoom("Test")
                .withCategory("Went Well")
                .withText("Test");

Of course you can just be lame and do it normally
var myCard = new Card();
myCard.author = "Someone";
myCard.text = "Text";
etc...
*/

/*
CardObject
roomCode - {string} Room that the card is in
category - {string} Category for card
createdAt - {datetime} Will default to now, but can pass a time for testing
text - {string} Text displayed on card
tags - {string[]} Tags that the card should have to start with
likes - {int} Number the likes a card has
author - {string} Author of the card
reveal - {boolean} If the card should be visible to everyone besides author
comments - {object[]} Comments added to card after creation as notes
*/
Card = function(){
    this.roomCode = "";
    this.category = "";
    this.createdAt = new Date();
    this.text = "";
    this.tags = [];
    this.likes = 0;
    this.author = "Anonymous";
    this.reveal = false;
    this.comments = [];
};

Card.prototype.inRoom = function (roomCode) {
    this.roomCode = roomCode;
    return this;
};

Card.prototype.withCategory = function (category) {
    this.category = category;
    return this;
};

Card.prototype.createdAt = function (dateTime) {
    this.createdAt = dateTime;
    return this;
};

Card.prototype.withText = function (text) {
    this.text = text;
    return this;
};

Card.prototype.withTags = function (tags) {
    this.tags = tags;
    return this;
};

Card.prototype.havingLikes = function (likes) {
    this.likes = likes;
    return this;
};

Card.prototype.createdBy = function (author) {
    this.author = author;
    return this;
};

Card.prototype.shouldBeRevealed = function (reveal) {
    this.reveal = reveal;
    return this;
};

Card.prototype.withComments = function (comments) {
    this.comments = comments;
    return this;
};
