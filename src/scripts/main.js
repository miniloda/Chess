// create 8 blackPawn variables for create element img
let blackPawn1 = document.createElement("img");
let blackPawn2 = document.createElement("img");
let blackPawn3 = document.createElement("img");
let blackPawn4 = document.createElement("img");
let blackPawn5 = document.createElement("img");
let blackPawn6 = document.createElement("img");
let blackPawn7 = document.createElement("img");
let blackPawn8 = document.createElement("img");
let blackPawns = [blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8];
counter = 0;
blackPawns.forEach(pawn => {
    counter+=1
    pawn.src = "../src/assets/black/black_pawn.svg";
    pawn.classList.add("black-pawn"+counter);
});
// create 8 whitePawn variables for create element img
let whitePawn1 = document.createElement("img");
let whitePawn2 = document.createElement("img");
let whitePawn3 = document.createElement("img");
let whitePawn4 = document.createElement("img");
let whitePawn5 = document.createElement("img");
let whitePawn6 = document.createElement("img");
let whitePawn7 = document.createElement("img");
let whitePawn8 = document.createElement("img");
let whitePawns = [whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8];
whitePawns.forEach(pawn => {pawn.src = "../src/assets/white/white_pawn.svg"
    pawn.classList.add("pawn");
    pawn.classList.add("white-pawn");})
// create 2 blackRook variables for create element img
let blackRook1 = document.createElement("img");
let blackRook2 = document.createElement("img");
let blackRooks = [blackRook1, blackRook2];
blackRooks.forEach(rook => {rook.src = "../src/assets/black/black_rook.svg"});
// create 2 whiteRook variables for create element img
let whiteRook1 = document.createElement("img");
let whiteRook2 = document.createElement("img");
let whiteRooks = [whiteRook1, whiteRook2];
whiteRooks.forEach(rook => {rook.src = "../src/assets/white/white_rook.svg"});
// create 2 blackKnight variables for create element img
let blackKnight1 = document.createElement("img");
let blackKnight2 = document.createElement("img");
let blackKnights = [blackKnight1, blackKnight2];
blackKnights.forEach(knight => {knight.src = "../src/assets/black/black_knight.svg"});
// create 2 whiteKnight variables for create element img
let whiteKnight1 = document.createElement("img");
let whiteKnight2 = document.createElement("img");
let whiteKnights = [whiteKnight1, whiteKnight2];
whiteKnights.forEach(knight => {knight.src = "../src/assets/white/white_knight.svg"});
// create 2 blackBishop variables for create element img
let blackBishop1 = document.createElement("img");
let blackBishop2 = document.createElement("img");
let blackBishops = [blackBishop1, blackBishop2];
blackBishops.forEach(bishop => {bishop.src = "../src/assets/black/black_bishop.svg"});
// create 2 whiteBishop variables for create element img
let whiteBishop1 = document.createElement("img");
let whiteBishop2 = document.createElement("img");
let whiteBishops = [whiteBishop1, whiteBishop2];
whiteBishops.forEach(bishop => {bishop.src = "../src/assets/white/white_bishop.svg"});
// init images
let blackQueen = document.createElement('img');
blackQueen.src = '../src/assets/black/black_queen.svg';
blackQueen.classList.add('black-queen');
let blackKing = document.createElement('img');
blackKing.src = '../src/assets/black/black_king.svg';
blackKing.classList.add('black-king');
let whiteQueen = document.createElement('img');
whiteQueen.src = '../src/assets/white/white_queen.svg';
whiteQueen.classList.add('white-queen');
let whiteKing = document.createElement('img');
whiteKing.src = '../src/assets/white/white_king.svg';
whiteKing.classList.add('white-king');

let chessBoard = document.querySelector('.chess-grid');
// end of init images

// init chess board
let chessBoardArray = [];
for (let i = 0; i < 8; i++) {
    chessBoardArray[i] = [];
    for (let j = 0; j < 8; j++) {
        chessBoardArray[i][j] = 0;
    }
}
// end of init chess board
// place pieces on chess board
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                chessBoard.children[i].children[j].classList.add('white');
            } else {
                chessBoard.children[i].children[j].classList.add('black');
            }
        } else {
            if (j % 2 == 0) {
                chessBoard.children[i].children[j].classList.add('black');
            } else {
                chessBoard.children[i].children[j].classList.add('white');
            }
        }
    }
}
//place chess piecies on chess board
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (i == 0) {
            if (j == 0) {
                chessBoard.children[i].children[j].appendChild(whiteRook1);
            } else if (j == 1) {
                chessBoard.children[i].children[j].appendChild(whiteKnight1);
            } else if (j == 2) {
                chessBoard.children[i].children[j].appendChild(whiteBishop1);
            } else if (j == 3) {
                chessBoard.children[i].children[j].appendChild(whiteQueen);
            } else if (j == 4) {
                chessBoard.children[i].children[j].appendChild(whiteKing);
            } else if (j == 5) {
                chessBoard.children[i].children[j].appendChild(whiteBishop2);
            } else if (j == 6) {
                chessBoard.children[i].children[j].appendChild(whiteKnight2);
            } else if (j == 7) {
                chessBoard.children[i].children[j].appendChild(whiteRook2);
            }
        } else if (i == 1) {
            let whitePawn = document.createElement('img');
            whitePawn.src = '../src/assets/white/white_pawn.svg';
            whitePawn.classList.add('white-pawn');
                chessBoard.children[i].children[j].appendChild(whitePawn);
        }
        else if (i == 6) {
                if(j == 0){
                    chessBoard.children[i].children[j].appendChild(blackPawn1);
                }
                else if(j == 1){
                    chessBoard.children[i].children[j].appendChild(blackPawn2);
                }
                else if(j == 2){
                    chessBoard.children[i].children[j].appendChild(blackPawn3);
                }
                else if(j == 3){
                    chessBoard.children[i].children[j].appendChild(blackPawn4);
                }
                else if(j == 4){
                    chessBoard.children[i].children[j].appendChild(blackPawn5);
                }
                else if(j == 5){
                    chessBoard.children[i].children[j].appendChild(blackPawn6);
                }
                else if(j == 6){
                    chessBoard.children[i].children[j].appendChild(blackPawn7);
                }
                else if(j == 7){
                    chessBoard.children[i].children[j].appendChild(blackPawn8);
                }
        }
        else if (i == 7) {
            if (j == 0) {
                chessBoard.children[i].children[j].appendChild(blackRook1);
            } else if (j == 1) {
                chessBoard.children[i].children[j].appendChild(blackKnight1);
            } else if (j == 2) {
                chessBoard.children[i].children[j].appendChild(blackBishop1);
            } else if (j == 3) {
                chessBoard.children[i].children[j].appendChild(blackQueen);
            } else if (j == 4) {

                chessBoard.children[i].children[j].appendChild(blackKing);
            } else if (j == 5) {
                chessBoard.children[i].children[j].appendChild(blackBishop2);
            } else if (j == 6) {
                chessBoard.children[i].children[j].appendChild(blackKnight2);
            } else if (j == 7) {
                chessBoard.children[i].children[j].appendChild(blackRook2);
            }
        }
    }
}
// end of place chess pieces on chess board