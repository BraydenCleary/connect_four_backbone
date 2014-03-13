app.Board = Backbone.View.extend({
  el: '.board',

  render: function(){
    this.collection.each(function(tile){
      this.$el.append(new app.Views.Tile({model: tile}).render().el)
    }, this)
  }
})
