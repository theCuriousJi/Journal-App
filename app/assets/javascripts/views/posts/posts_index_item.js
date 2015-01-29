JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  events: {
    "click button": "deletePost"

  },

  template: JST['posts/index_item'],

  tagName: 'li',

  render: function(){
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  deletePost: function (event) {
      event.preventDefault();
      //destroy causes a server event
      this.model.destroy();
  }



});
