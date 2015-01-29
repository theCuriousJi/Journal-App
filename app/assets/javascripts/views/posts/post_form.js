JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  events: {
    'submit .new-post': 'createPost'
  },

  createPost: function(event){
    event.preventDefault();
    $currentTarget = $(event.currentTarget)
    var params = $currentTarget.serializeJSON();
    var that = this;
    this.model.save(params, {
      success: function () {
        Backbone.history.navigate('', {trigger: true})
      },
      error: function () {
        var errors = arguments[1]
        var $error = $('<p class="errors">')
        $error.html(errors.responseJSON)
        that.$el.append($error)
        Backbone.history.navigate('#posts/new', {trigger: true})
      }
    } );
  },

  render: function(){
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }
})
