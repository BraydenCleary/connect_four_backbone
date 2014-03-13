app.Collections.Players = Backbone.Collection.extend({
  initialize: function(){
    this.seedPlayers();
  },

  seedPlayers: function(){
    _(2).times(function(counter){
      this.add(new app.Models.Player({player: counter + 1}))
    }, this)
  }
})
