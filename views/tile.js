app.Views.Tile = Backbone.View.extend({
  tagName: 'div',
  className: 'tile',
  template: _.template("<div class='<%= state %> <%= owner %>'></div>"),

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})
