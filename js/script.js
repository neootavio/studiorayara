let tela = document.getElementById("imgRandom");

function sorteia(n){
    return Math.random(Math.random()*n);
}

function inserirImagem(url){
    let img = document.createElement("img");
    img.src = url;
    tela.appendChild(img);
}

function mostraImagemRandomica(){
    tela.innerHTML = "";
    let imgDia = parseInt(Math.round(Math.random()*10));
    console.log(imgDia);
    switch (imgDia){

        case 1 : inserirImagem("../assets/randomImages/r1.jpg");
        break;

        case 2 : inserirImagem("../assets/randomImages/r2.jpg");
        break;

        case 3 : inserirImagem("../assets/randomImages/r3.jpg");
        break;

        case 4 : inserirImagem("../assets/randomImages/r4.jpg");
        break;

        case 5 : inserirImagem("../assets/randomImages/r5.jpg");
        break;

        case 6 : inserirImagem("../assets/randomImages/r6.jpg");
        break;

        case 7 : inserirImagem("../assets/randomImages/r7.jpg");
        break;

        case 8 : inserirImagem("../assets/randomImages/r8.jpg");
        break;

        case 9 : inserirImagem("../assets/randomImages/r9.jpg");
        break;

        case 10 : inserirImagem("../assets/randomImages/r10.jpg");
        break;

    } 
}
