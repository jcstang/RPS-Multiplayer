// rps - multiplayer
// Jacob Stanger
// FEB 2020

$(document).ready(function () {

  function makeOthersGray(choice) {
    console.log('goGray() ', choice);
    var player = choice.substr(choice.length - 3);

    // make selection black
    $('#' + choice).css('color', '#333');

    // others gray
    if (player === 'one') {
      if (choice === 'rock-one') {
        $('#paper-one').css('color', 'lightgrey');
        $('#scissors-one').css('color', 'lightgrey');
      } else if (choice === 'paper-one') {
        $('#rock-one').css('color', 'lightgrey');
        $('#scissors-one').css('color', 'lightgrey');
      } else {
        $('#paper-one').css('color', 'lightgrey');
        $('#rock-one').css('color', 'lightgrey');
      }


    } else {
      if (choice === 'rock-two') {
        $('#paper-two').css('color', 'lightgrey');
        $('#scissors-two').css('color', 'lightgrey');
      } else if (choice === 'paper-two') {
        $('#rock-two').css('color', 'lightgrey');
        $('#scissors-two').css('color', 'lightgrey');
      } else {
        $('#paper-two').css('color', 'lightgrey');
        $('#rock-two').css('color', 'lightgrey');
      }
    }

  }

  $('.one').on('click', function() {
    makeOthersGray(this.id);
  });

  $('.two').on('click', function() {
    makeOthersGray(this.id);
  });


});