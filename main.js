let title = document.querySelector('.title');
let win = document.getElementById('win');
let turn = 'X';
function game(id){
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML == ''){
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'play O';
    }
    else if(turn === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'play X';
    };
    winner();
    draw();
};
function clear(){
    setTimeout(() => {
            for(let i = 1; i < 10; i++){
            items[i].innerHTML = '';
            }; 
            title.innerHTML = '<span>X-O</span>GAME';
            win.innerHTML = '';
        }, 2000);
};

let items = [];
for( i = 1; i < 10; i++){
    items[i] = document.getElementById('item' + i);
};

function winner(){
    if(    items[1].innerHTML == 'X' && items[2].innerHTML == 'X' && items[3].innerHTML == 'X'
        || items[4].innerHTML == 'X' && items[5].innerHTML == 'X' && items[6].innerHTML == 'X'
        || items[7].innerHTML == 'X' && items[8].innerHTML == 'X' && items[9].innerHTML == 'X'
        || items[1].innerHTML == 'X' && items[4].innerHTML == 'X' && items[7].innerHTML == 'X'
        || items[2].innerHTML == 'X' && items[5].innerHTML == 'X' && items[8].innerHTML == 'X'
        || items[3].innerHTML == 'X' && items[6].innerHTML == 'X' && items[9].innerHTML == 'X'
        || items[1].innerHTML == 'X' && items[5].innerHTML == 'X' && items[9].innerHTML == 'X'
        || items[3].innerHTML == 'X' && items[5].innerHTML == 'X' && items[7].innerHTML == 'X'
    ){
        title.innerHTML = '<span>X win</span>';
        win.innerHTML = 'X WIN';
        clear();
        turn = 'X';
    }
    else if(items[1].innerHTML == 'O' && items[2].innerHTML == 'O' && items[3].innerHTML == 'O'
        || items[4].innerHTML == 'O' && items[5].innerHTML == 'O' && items[6].innerHTML == 'O'
        || items[1].innerHTML == 'O' && items[4].innerHTML == 'O' && items[7].innerHTML == 'O'
        || items[2].innerHTML == 'O' && items[5].innerHTML == 'O' && items[8].innerHTML == 'O'
        || items[7].innerHTML == 'O' && items[8].innerHTML == 'O' && items[9].innerHTML == 'O'
        || items[3].innerHTML == 'O' && items[6].innerHTML == 'O' && items[9].innerHTML == 'O'
        || items[1].innerHTML == 'O' && items[5].innerHTML == 'O' && items[9].innerHTML == 'O'
        || items[3].innerHTML == 'O' && items[5].innerHTML == 'O' && items[7].innerHTML == 'O'
    ){
        title.innerHTML = '<span>O win</span>'
        win.innerHTML = 'O WIN';
        clear();
        turn = 'X';
    };
    
};
function draw(){
    if( items[1].innerHTML != '' &&
        items[2].innerHTML != '' &&
        items[3].innerHTML != '' &&
        items[4].innerHTML != '' &&
        items[5].innerHTML != '' &&
        items[6].innerHTML != '' &&
        items[7].innerHTML != '' &&
        items[8].innerHTML != '' &&
        items[9].innerHTML != '' &&
        win.innerHTML != 'X WIN' &&
        win.innerHTML != 'O WIN'
    ){
    title.innerHTML = 'Draw game';
    win.innerHTML = 'Draw game';
    clear();
    };
};
