let tela = document.getElementById("imgRandom");

function sorteia(n){
    return Math.random(Math.random()*n);
}

function inserirImagem(url){
    let img = document.createElement("img");
    img.src = url;
    img.width = 300;
    img.height = 400;
    tela.appendChild(img);
}

function mostraImagemRandomica(){
    tela.innerHTML = "";
    let imgDia = parseInt(Math.round(Math.random()*10));
    console.log(imgDia);

    switch (imgDia){

        case 1 : inserirImagem("https://i.pinimg.com/originals/45/d5/83/45d583975e6bac43eb4f11d71cc82add.jpg");
        break;

        case 2 : inserirImagem("https://i.pinimg.com/originals/96/fd/ae/96fdae70a9683d5189d1187c65f4bbf1.jpg");
        break;

        case 3 : inserirImagem("https://i.pinimg.com/originals/2a/06/96/2a06968c42270fe1d348b82aa9cacf1b.jpg");
        break;

        case 4 : inserirImagem("https://i.pinimg.com/originals/48/a2/85/48a285db8ce0cdffbb7c87d42ca93ed7.jpg");
        break;

        case 5 : inserirImagem("https://i.pinimg.com/originals/bf/44/ee/bf44ee02a6715554723143d404fa4c07.jpg");
        break;

        case 6 : inserirImagem("https://i.pinimg.com/originals/cd/12/46/cd1246fcb2079ab6a5a9973a4192b53f.jpg");
        break;

        case 7 : inserirImagem("https://i.pinimg.com/originals/bc/7c/9d/bc7c9d0207a78bdf85512c3404155807.jpg");
        break;

        case 8 : inserirImagem("https://i.pinimg.com/originals/ff/26/f2/ff26f226a6f35372a5570d81c9ef4c12.jpg");
        break;

        case 9 : inserirImagem("https://i.pinimg.com/originals/e1/50/f1/e150f13cfed63e0e5d1f18f62723ba98.jpg");
        break;

        case 10 : inserirImagem("https://i.pinimg.com/originals/8b/b8/b6/8bb8b64133d08069f269463a789174db.jpg");
        break;

    } 
}
