window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new JournalApp.Routers.Posts({$el: $('body')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
