JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  events: {
    'click a': 'navigateBack'
  },

  initialize: function(){
    this.listenTo(this.model, 'sync remove', this.render);
  },

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  navigateBack: function(event){
    window.history.back()
  }
})
