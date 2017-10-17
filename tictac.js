// $(document).ready(function() {
//   $(".dots").click(function() {
//     // $(".guys, p").css("visibility", "hidden");
//     // $("td").css("display", "inline-block");
//     aiCo = "blue";
//     huCo = "red";
    
//   });
//   $(".dots2").click(function() {
//     // $(".guys, p").css("visibility", "hidden");
//     // $("td").css("display", "inline-block");
//      aiCo = "blue";
//      huCo = "red";
//   });

//   $("td").click(function() {
//     move(this, huPlayer, huCo);
//     console.log("clicked");
//   });
// });


// var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// var huPlayer = "P";
// var aiPlayer = "C";
//  var iter = 0;
// var round = 0;
// var aiCo = "red";
// var huCo = "blue";

// function move(element, player, color) {
//   console.log("element"+ element.id);
//   if (board[element.id] != "P" && board[element.id] != "C") {
//     round++;
//     $(element).css("background-color", color);
//     board[element.id] = player;
//     console.log(board);

//     if (winning(board, player)) {
//         setTimeout(function() {
//           $('.dots1').text("YOU WIN"); 
//           reset();
//         }, 500);
//         return;
//     } else if (round > 8) {
//         setTimeout(function() {
//           $('.dots1').text("TIE");
//           reset();
//         }, 500);
//         return;
//     } else {
//       round++;
//       var index = minimax(board, aiPlayer).index;
//       var selector = "#" + index;
//       $(selector).css("background-color", aiCo);
//       board[index] = aiPlayer;
//       console.log(board);
//       console.log(index);
//       if (winning(board, aiPlayer)) {
//         setTimeout(function() {
//            $('.dots1').text("YOU LOSE");
//           reset();
//         }, 500);
//         return;
//       } else if (round === 0) {
//         setTimeout(function() {
//         $('.dots1').text("TIE");
//           reset();
//         }, 500);
//         return;
//       }
//     }
//   }
// }

// function reset() {
//   round = 0;
//   board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//   $("td").css("background-color", "transparent");
// }

// function minimax(reboard, player) {
//   iter++;
//   var array = avail(reboard);
//   if (winning(reboard, huPlayer)) {
//     return {
//       score: -10
//     };
//   } else if (winning(reboard, aiPlayer)) {
//     return {
//       score: 10
//     };
//   } else if (array.length === 0) {
//     return {
//       score: 0
//     };
//   }

//   var moves = [];
//   for (var i = 0; i < array.length; i++) {
//     var move = {};
//     move.index = reboard[array[i]];
//     reboard[array[i]] = player;

//     if (player == aiPlayer) {
//       var g = minimax(reboard, huPlayer);
//       move.score = g.score;
//     } else {
//       var g = minimax(reboard, aiPlayer);
//       move.score = g.score;
//     }
//     reboard[array[i]] = move.index;
//     moves.push(move);
//   }

//   var bestMove;
//   if (player === aiPlayer) {
//     var bestScore = -10000;
//     for (var i = 0; i < moves.length; i++) {
//       if (moves[i].score > bestScore) {
//         bestScore = moves[i].score;
//         bestMove = i;
//       }
//     }
//   } else {
//     var bestScore = 10000;
//     for (var i = 0; i < moves.length; i++) {
//       if (moves[i].score < bestScore) {
//         bestScore = moves[i].score;
//         bestMove = i;
//       }
//     }
//   }
//   return moves[bestMove];
// }

// //available spots
// function avail(reboard) {
//   return reboard.filter(s => s != "P" && s != "C");
// }

// // winning combinations
// function winning(board, player) {
//   if (
//     (board[0] == player && board[1] == player && board[2] == player) ||
//     (board[3] == player && board[4] == player && board[5] == player) ||
//     (board[6] == player && board[7] == player && board[8] == player) ||
//     (board[0] == player && board[3] == player && board[6] == player) ||
//     (board[1] == player && board[4] == player && board[7] == player) ||
//     (board[2] == player && board[5] == player && board[8] == player) ||
//     (board[0] == player && board[4] == player && board[8] == player) ||
//     (board[2] == player && board[4] == player && board[6] == player)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

var winnersArray = Array();
var currentPlayer = 0;
var selectionsPlayer1 = new Array();
var selectionsplayer2 = new Array();
var move = 0;

var points1 = 0;
var points2 = 0;
var size = 3;
function fillingWinners() {
    winnersArray.push([1, 2, 3]);
    winnersArray.push([4, 5, 6]);
    winnersArray.push([7, 8, 9]);
    winnersArray.push([1, 4, 7]);
    winnersArray.push([2, 5, 8]);
    winnersArray.push([3, 6, 9]);
    winnersArray.push([1, 5, 9]);
    winnersArray.push([3, 5, 7]);

}
function reset() {
    currentPlayer = 0;
    selectionsPlayer1 = new Array();
    selectionsplayer2 = new Array();
}


function drawBoard() {
    var count = 1;
    var parent = document.getElementById("game");
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
    for (var i = 0; i < 3; i++) {
        var row =  document.createElement("tr");
        for (var r = 0; r < 3; r++) {
            var col = document.createElement("td");
             col.id = count; 
             //col.innerHTML = count;
            var handler = function(e) {
                if (currentPlayer == 0) {
                   this.innerHTML = "X";
          
                   selectionsPlayer1.push(parseInt(this.id));
                
                   selectionsPlayer1.sort(function(a, b) {
                     return a - b;
                   });
                   console.log(selectionsPlayer1);
                } else {
                  this.innerHTML = "O";
                  selectionsplayer2.push(parseInt(this.id));
                  selectionsplayer2.sort(function(a, b) {
                    return a - b;
                  });
                }
                move++;
            
                var isWin = checkwinner();
                if (isWin) {
                    if(currentPlayer == 0)
                        points1++;
                    else
                        points2++;
                    document.getElementById("draw").innerHTML = " ";
                    document.getElementById("player1").innerHTML =  points1 ;
                    document.getElementById("player2").innerHTML = points2;
                    
                   reset();
                   drawBoard();
                } else if (selectionsPlayer1.length + selectionsplayer2.length === 9) 
                {

                   
                 
                   drawBoard();
                     reset();
                      document.getElementById("draw").innerHTML = " Draw";

                }
                else {
              
                   if (currentPlayer == 0)
                        currentPlayer = 1;
                    else
                        currentPlayer = 0;
                        this.removeEventListener('click', arguments.callee);

                } 
               
            };

            col.addEventListener('click', handler);
            row.appendChild(col);
            count++;
        }
        
        parent.appendChild(row);
    }
    fillingWinners();
}

function checkwinner() {
     var win = false;
     var playerSelections = new Array();
     if (currentPlayer == 0) {
        playerSelections = selectionsPlayer1;
     } else {
        playerSelections = selectionsplayer2;
     }
     if (playerSelections.length >= size) {
         for (var i = 0; i < winnersArray.length; i++) {
             var sets = winnersArray[i];
             var setFound = true;

             for (var r = 0; r < sets.length; r++) {
                var found = false;
                for (var s = 0; s < playerSelections.length; s++) {
                    if (sets[r] == playerSelections[s]) {
                        found = true;
                        break;
                    }
                }
                if (found == false) {
                    setFound = false;
                    break;
                }
             }
             if (setFound == true) {
                win = true;
                break;
            }
         }
  
     }
    return win;


}
window.addEventListener('load', function(){
     drawBoard();
});



