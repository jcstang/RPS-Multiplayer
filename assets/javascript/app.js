// rps - multiplayer
// Jacob Stanger
// FEB 2020

$(document).ready(function () {

  $('#rock-one').on('click', function(){
    $(this).css('color', '#333');
    console.log(this.id);
    
    colorOthersGray(this.id);
  });

  $('#paper-one').on('click', function(){
    $(this).css('color', '#333');
    colorOthersGray(this.id);
  });

  $('#scissors-one').on('click', function(){
    $(this).css('color', '#333');
    colorOthersGray(this.id);
  });

  $('#rock-two').on('click', function(){
    $(this).css('color', '#333');
    colorOthersGray(this.id);
  });

  $('#paper-two').on('click', function(){
    $(this).css('color', '#333');
    colorOthersGray(this.id);
  });

  $('#scissors-two').on('click', function(){
    $(this).css('color', '#333');
    colorOthersGray(this.id);
  });


  function colorOthersGray(choice) {
    var whichPlayer = choice.substr(choice.length - 3);
    console.log(whichPlayer);
    // switch (choice) {
    //   case 'rock-one':
    //     $('#paper-one').css('color', 'lightgrey');
    //     $('#scissors-one').css('color', 'lightgrey');
    //     break;
    //   case 'paper-one':
    //     $('#rock-one').css('color', 'lightgrey');
    //     $('#scissors-one').css('color', 'lightgrey');
    //     break;
    //   case 'scissors-one':
    //     $('#rock-one').css('color', 'lightgrey');
    //     $('#paper-one').css('color', 'lightgrey');
    //     break;
    //   default:
    //     break;
    // }

  }



});