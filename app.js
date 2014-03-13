var app = app || {
  Views: {},
  Models: {},
  Collections: {}
}

$(function() {
  app.vent =  _.extend({}, Backbone.Events);

  app.players = new app.Collections.Players();

  gameControls = new app.Views.GameControls({
    collection: app.players
  });

  board = new app.Board({
    collection: new app.Collections.TilesCollection
  });

  board.render();
  gameControls.render();
});


