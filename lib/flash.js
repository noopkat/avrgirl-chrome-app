var Avrgirl = require('avrgirl-arduino');

module.exports.flash = function(board, file, callback) {
  var avrgirl = new Avrgirl({
    board: board,
    debug: true
  });

  // convert the file contents to a buffer, as avrgirl is expecting
  var hex = new Buffer(file);

  // call flash method
  avrgirl.flash(hex, function(error) {
    return callback(error);
  });
}
