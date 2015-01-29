JournalApp.Routers.Posts = Backbone.Router.extend({

  initialize: function(options) {
    this.$el = options.$el
  },

  routes: {
    "": 'postsIndex',
    'posts/new': 'postForm',
    'posts/:id': 'postShow',
  },

  postsIndex: function(){
      this.collection =  new JournalApp.Collections.Posts();
      var indexView = new JournalApp.Views.PostsIndex({collection: this.collection});
      this.collection.fetch();
      this._swapView(indexView)
    },

  postShow: function (id) {
    var post = this.getOrFetch(id);
    var showView = new JournalApp.Views.PostShow({model: post});

    this._swapView(showView)
  },

  postForm: function(){
    this.model = new JournalApp.Models.Post();
    var postForm = new JournalApp.Views.PostForm({model: this.model});
    this._swapView(postForm)
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$el.html(newView.render().$el)
  },

  getOrFetch: function(id){
    if (this.collection) {
      return this.collection.get(id)
    } else {
      this.collection = new JournalApp.Collections.Posts();
      return this.collection.fetch( {
        success: function () {
          this.postShow(id);
        }.bind(this)
      });
    }
  }

});


// $(function(){
//   new JournalApp.Routers.Posts();
//   Backbone.history.start();
// })
