class Game{ //On crée l'object "Game"
    constructor(name,year,desc,img){
        this.name = name;
        this.year = year;
        this.desc = desc;
        this.img = img;
    }
}

/*On initialise chaque jeu pour similuer une BDD*/
let mw2 = new Game("MW2",10/11/2009,"Call of Duty : Modern Warfare 2 est un jeu de tir à la première personne développé par Infinity Ward, et édité par Activision, un précurseur dans la licence CallOfDuty","assets/images/ImageCallOfDutyMW2.jpg");

let b02 = new Game("BO2",12/11/2012,"Call of Duty: Black Ops II est un jeu vidéo de tir à la première personne développé par Treyarch et édité par Activision, la compétition sur cet Opus était un réel plaisir à regarder","assets/images/ImageCallOfDutyBO2.jfif");

let cs = new Game("CS",21/08/2012,"Counter-Strike: Global Offensive est un jeu de tir à la première personne multijoueur en ligne basé sur le jeu d'équipe développé par Valve Corporation, une référence dans l'esport pour le FPS, qui possède une audience conséquente même aujourd'hui","assets/images/ImageCounterStrikeGlobalOffensive.jpg");

let valorant = new Game("Valorant",2/06/2020,"Valorant est un jeu vidéo free-to-play de tir à la première personne en multijoueur développé et édité par Riot Games, sortie pendant le confinement le jeu à fais fureur, reprenant les code de Counter Strike tout en ajoutant un côté compétences.","assets/images/ImageValorant.jfif");

let haloInfinite = new Game("Halo Infinite",15/11/2021,"Halo Infinite est un jeu vidéo de tir à la première personne développé par 343 Industries et édité par Xbox Game Studios. C'est le sixième jeu principal de la série Halo, faisant suite à Halo 5: Guardians sorti en 2015.","assets/images/HaloInfinite.jpg");

/*On stock nos jeux dans un tableau pour les parcourirs facilement*/
let gameArray = [mw2,b02,cs,valorant,haloInfinite];
let currentGameArrayId = 0; //On stock l'id du jeu actuellement affiché sur le carrousel

/*On récupère les éléments du DOM lié au carrousel*/
let getCarrousel = document.getElementById("carrousel");
let getPreviousSwitch = document.getElementById("previousImage");
let getNextSwitch = document.getElementById("nextImage");
let AnotherForRun = false;

/*On écoute le clic sur les switchs du carrousel*/
getPreviousSwitch.addEventListener("click", function(e){
    if(currentGameArrayId==0){//On gère le cas où on est déjà au début du tableau
        currentGameArrayId=gameArray.length-1;
        displayImage(currentGameArrayId);
        AnotherForRun = true;
        infiniteFor(currentGameArrayId); //On affiche l'image selon l'id voulu
    }
    else{
        currentGameArrayId--;
        displayImage(currentGameArrayId);
        AnotherForRun = true;
        infiniteFor(currentGameArrayId);
    }
});

getNextSwitch.addEventListener("click", function(e){
    if(currentGameArrayId==gameArray.length-1){ //On gère le cas où arrive à la fin du tableau
        currentGameArrayId=0;
        displayImage(currentGameArrayId);
        AnotherForRun = true;   //On affiche l'image selon l'id voulu
        infiniteFor(currentGameArrayId); 
    }
    else{
        currentGameArrayId++;
        displayImage(currentGameArrayId);
        AnotherForRun = true;
        infiniteFor(currentGameArrayId);
    }
});


//Fonction qui gère l'affichage selon l'id du jeu dans le tableau
function displayImage(idImage){
    getCarrousel.style.backgroundImage = 'url("' + gameArray[idImage].img + '")';
}

//boucle d'affichage automatique
infiniteFor(currentGameArrayId);


function infiniteFor(currentImg){
    console.log("Je passe ici");
    //AnotherForRun = false;
    for(let i=currentImg;i<gameArray.length;i++){
        console.log("Et la");
        setTimeout(() =>{//On set le délai entre les images
            displayImage(i);
            console.log(i);
            if(i==gameArray.length-1){//Si j'arrive à la fin je remet à 0
                setTimeout(()=>{
                    infiniteFor(0);//Quand j'arrive a la fin je reviens au début
                },2000);
            }
            /*if(AnotherForRun){
                console.log("ca me soul")
                return 0;
            }*/
        }, i*2000);
    }
}


/*function infiniteForEach(){
    gameArray.forEach((game,i) =>{
        setTimeout(() =>{
            displayImage(i);
            console.log(i);
            if(i==gameArray.length-1){
                console.log("Yoo");
                setTimeout(()=>{
                    infiniteForEach();
                },2000);
            }
        }, i*2000);
    });

}*/
