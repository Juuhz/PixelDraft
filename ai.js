const fs = require('fs');

// Inicia variáveis
let Top     = 290,
    Left    = 550,
    today   = new Date().getDate(),
    lastDay = false,
    color   = false;

// Inicia AI
setInterval( () => {

    // Pega a nova direção
    Top = setDirection( Top );
    Left = setDirection( Left );

    // Verifica se o dia mudou
    if( today != lastDay ){
        lastDay = today;
        color = dayColor(); // Caso sim, pega nova cor
    }

    // Cria o novo PIN
    createPoint( Top, Left, color );

}, 1000);

// Evento do AI que seleciona qual caminho ele quer ir, esquerda ou direita.
setDirection = ( x ) => {

    let choose 	    = Math.floor(Math.random() * (+2 - +0)) + +0,
        space 	    = 15;

    if( choose === 1 ) return x + space;
    else return (x - space) < 0 ? 0 : (x - space);

}

// Com base na decisão que o AI toma, ele cria um PIN que ilustra o histórico de decisões
createPoint = ( top, left, color ) => {
    // Monta o PIN
    const block = `<block style="background-color: ${color};top: ${top}px;left: ${left}px;"></block>`;

    // Insere o novo PIN
    fs.appendFile( `${__dirname}/src/static/pins.html`, block, function (err) {
        if (err) throw err;
        console.log( `PIN criado: color: ${color} || top: ${top} || left: ${left}` );
    });
}

// Evento que seleciona uma cor por dia
dayColor = () => {
    return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}