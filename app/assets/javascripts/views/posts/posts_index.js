JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function(){
    this.listenTo(this.collection, 'sync remove', this.render);
  },

  render: function(){
          var content = this.template();
          this.$el.html(content);
          var $ul = this.$el.find('ul.posts');
          this.collection.each(function(post){
            var postView = new JournalApp.Views.PostsIndexItem({model: post});
            $ul.append(postView.render().$el);
          }.bind(this))
          return this;
        },

});
