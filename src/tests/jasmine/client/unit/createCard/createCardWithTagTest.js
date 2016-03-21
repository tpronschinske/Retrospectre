/*eslint-disable*/
describe("add valid cards with tags", function() {

    beforeEach(function() {
        spyOn(Meteor, "call").and.callThrough();
        spyOn(Cards, "insert");
    });

    it("should add card with one tag", function() {
        var eventObj = {
            event: {
                target: {
                    thoughts: {
                        value: "testThought"
                    },
                    tags: {
                        value: "testTag"
                    },
                    likes: {
                        value: 0
                    },
                    author: {
                        value: "testAuthor"
                    },
                    goodCategoryRadio: {
                        checked: true
                    },
                    badCategoryRadio: {
                        checked: false
                    }
                },
                preventDefault: function() {}
            }
        };
        spyOn(Session, "get").and.returnValue("testRoom");
        spyOn(Session, "set");
        var baseTime = new Date();
        jasmine.clock().mockDate(baseTime);

        Template.cardSubmitArea.fireEvent("submit #card", eventObj);
        expect(Meteor.call).toHaveBeenCalledWith("submitCardWithTags", ["testRoom",
            "Went Well", "testThought", ["testTag"], 0, "testAuthor"
        ]);
        expect(Cards.insert).toHaveBeenCalledWith({
            roomCode: "testRoom",
            category: "Went Well",
            createdAt: baseTime,
            text: "testThought",
            tags: ["testTag"],
            likes: 0,
            author: "testAuthor",
            reveal: false,
            comments: []
        });
        expect(Session.set).toHaveBeenCalledWith("author", "testAuthor");
        expect(eventObj.event.target.thoughts.value).toEqual("");
        expect(eventObj.event.target.tags.value).toEqual("");
    });

    it("should add card with multiple tags", function() {
        var eventObj = {
            event: {
                target: {
                    thoughts: {
                        value: "testThought"
                    },
                    tags: {
                        value: "testTag,jasmine unit,testing"
                    },
                    likes: {
                        value: 0
                    },
                    author: {
                        value: "testAuthor"
                    },
                    goodCategoryRadio: {
                        checked: true
                    },
                    badCategoryRadio: {
                        checked: false
                    }
                },
                preventDefault: function() {}
            }
        };
        spyOn(Session, "get").and.returnValue("testRoom");
        spyOn(Session, "set");
        var baseTime = new Date();
        jasmine.clock().mockDate(baseTime);

        Template.cardSubmitArea.fireEvent("submit #card", eventObj);
        expect(Meteor.call).toHaveBeenCalledWith("submitCardWithTags", ["testRoom",
            "Went Well", "testThought", ["testTag", "jasmine unit", "testing"], 0, "testAuthor"
        ]);
        expect(Cards.insert).toHaveBeenCalledWith({
            roomCode: "testRoom",
            category: "Went Well",
            createdAt: baseTime,
            text: "testThought",
            tags: ["testTag", "jasmine unit", "testing"],
            likes: 0,
            author: "testAuthor",
            reveal: false,
            comments: []
        });
        expect(Session.set).toHaveBeenCalledWith("author", "testAuthor");
        expect(eventObj.event.target.thoughts.value).toEqual("");
        expect(eventObj.event.target.tags.value).toEqual("");
    });

    it("should add card with one tag, though given several of same tag", function() {
        var eventObj = {
            event: {
                target: {
                    thoughts: {
                        value: "testThought"
                    },
                    tags: {
                        value: "testTag,testTag,testTag,testTag"
                    },
                    likes: {
                        value: 0
                    },
                    author: {
                        value: "testAuthor"
                    },
                    goodCategoryRadio: {
                        checked: true
                    },
                    badCategoryRadio: {
                        checked: false
                    }
                },
                preventDefault: function() {}
            }
        };
        spyOn(Session, "get").and.returnValue("testRoom");
        spyOn(Session, "set");
        var baseTime = new Date();
        jasmine.clock().mockDate(baseTime);

        Template.cardSubmitArea.fireEvent("submit #card", eventObj);
        expect(Meteor.call).toHaveBeenCalledWith("submitCardWithTags", ["testRoom",
            "Went Well", "testThought", ["testTag"], 0, "testAuthor"
        ]);
        expect(Cards.insert).toHaveBeenCalledWith({
            roomCode: "testRoom",
            category: "Went Well",
            createdAt: baseTime,
            text: "testThought",
            tags: ["testTag"],
            likes: 0,
            author: "testAuthor",
            reveal: false,
            comments: []
        });
        expect(Session.set).toHaveBeenCalledWith("author", "testAuthor");
        expect(eventObj.event.target.thoughts.value).toEqual("");
        expect(eventObj.event.target.tags.value).toEqual("");
    });
});
