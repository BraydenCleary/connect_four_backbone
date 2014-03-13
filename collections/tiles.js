app.Collections.TilesCollection = Backbone.Collection.extend({
  initialize: function(){
    _.times(42, function(){
      this.add(new app.Models.Tile())
    }, this)
  }
})
