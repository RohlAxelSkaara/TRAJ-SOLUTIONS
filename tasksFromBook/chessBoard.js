var board = "";
for(var i = 0; i < 8; i++){
    for(var a = 0; a < 8; a++){
        board += (a % 2) == (i % 2) ? " " : "#";
    }
    board += "\n";
}
console.log(board);

// Taget fra https://www.reddit.com/r/learnprogramming/comments/7vyt65/js_creating_a_chess_board_from_eloquent_javascript/

