// rps - multiplayer
// Jacob Stanger
// FEB 2020

$(document).ready(function () {

  function goGray(choice) {
    console.log('goGray() ', choice);
    var player = choice.substr(choice.length - 3);
    $('#' + choice).css('color', '#333');

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
    // $(this).css('color', '#333');
    goGray(this.id);
  });

  $('.two').on('click', function() {
    // $(this).css('color', '#333');
    goGray(this.id);
  });


  // $('#rock-one').on('click', function(){
  //   $(this).css('color', '#333');
  //   prepOthersForGray(this.id);
  // });

  // $('#paper-one').on('click', function(){
  //   $(this).css('color', '#333');
  //   prepOthersForGray(this.id);
  // });

  // $('#scissors-one').on('click', function(){
  //   $(this).css('color', '#333');
  //   prepOthersForGray(this.id);
  // });

  // $('#rock-two').on('click', function(){
  //   $(this).css('color', '#333');
  //   prepOthersForGray(this.id);
  // });

  // $('#paper-two').on('click', function(){
  //   $(this).css('color', '#333');
  //   prepOthersForGray(this.id);
  // });

  // $('#scissors-two').on('click', function(){
  //   $(this).css('color', '#333');
  //   prepOthersForGray(this.id);
  // });


  function prepOthersForGray(choice) {
    var whichPlayer = choice.substr(choice.length - 3);
    // console.log(whichPlayer);

    if (whichPlayer === 'one') {
      //======= Player 1 =============================
      if (choice === 'rock-' + whichPlayer) {
        $('#paper-' + whichPlayer).css('color', 'lightgrey');
        $('#scissors-' + whichPlayer).css('color', 'lightgrey');
      } else if (choice === 'paper-' + whichPlayer) {
        $('#rock-' + whichPlayer).css('color', 'lightgrey');
        $('#scissors-' + whichPlayer).css('color', 'lightgrey');
      } else {
        // scissors
        $('#paper-' + whichPlayer).css('color', 'lightgrey');
        $('#rock-' + whichPlayer).css('color', 'lightgrey');
      }


    } else {
      //======= Player 2 =============================
      if (choice === 'rock-' + whichPlayer) {
        $('#paper-' + whichPlayer).css('color', 'lightgrey');
        $('#scissors-' + whichPlayer).css('color', 'lightgrey');
      } else if (choice === 'paper-' + whichPlayer) {
        $('#rock-' + whichPlayer).css('color', 'lightgrey');
        $('#scissors-' + whichPlayer).css('color', 'lightgrey');
      } else {
        // scissors
        $('#paper-' + whichPlayer).css('color', 'lightgrey');
        $('#rock-' + whichPlayer).css('color', 'lightgrey');
      }
    }

  }



});