app.Views.GameControls = Backbone.View.extend({

  el: ".game-controls",

  //Todo: break into separate file
  template: _.template("<% _.each(collection, function(model) { %><input type='text' class='player<%= model.player %>' placeholder='Player <%= model.player %>s Name' data-player-number= '<%= model.player %>'>Player<%= model.player %>: <%= model.name %></input><br/><% }); %></input><button class='start'>Start</button><button class='reset'>Reset</button>"),

  initialize: function(){
    app.vent.bind("players-changed", this.updatePlayers);
    this.collection.on("change:name", this.render, this);
  },

  events: {
    "blur input": "changePlayerName",
    "click .start": "startGame",
    "click .reset": "reset"
  },

  render: function(){
    this.$el.html(this.template({collection: this.collection.toJSON()}));
  },

  changePlayerName: function(e){
    name = $(e.target).val();
    if (this.isValidName(name)){
      playerNumber = $(e.target).data("playerNumber");
      player = this.collection.findWhere({player: playerNumber})
      player.set("name", name);
    }
  },

  startGame: function(){
    app.vent.trigger('start-game');
    this.lockPlayerInputs();
  },

  reset: function(){
    app.vent.trigger('reset-game');
    this.unlockPlayerInputs();
    this.clearPlayerNames();
  },

  lockPlayerInputs: function(){
    this.$('input').each(function(index, el){
      $(el).attr('disabled','')
    })
  },

  unlockPlayerInputs: function(){
    this.$('input').each(function(index, el){
      $(el).removeAttr('disabled')
    })
  },

  clearPlayerNames: function(){
    this.collection.each(function(player){
      player.set("name", '')
    })
  },

  isValidName: function(name){
    return name.length != 0
  }
})
