class Game{ //On crée l'object "Game"
    constructor(name,year,desc,img){
        this.name = name;
        this.year = year;
        this.desc = desc;
        this.img = img;
    }
}

/*On initialise chaque jeu pour similuer une BDD*/
let mw2 = new Game("MW2",10/11/2009,"Call of Duty : Modern Warfare 2 est un jeu de tir à la première personne développé par Infinity Ward, et édité par Activision, un précurseur dans la licence CallOfDuty","../images/ImageCallOfDutyMW2.jpg");

let b02 = new Game("BO2",12/11/2012,"Call of Duty: Black Ops II est un jeu vidéo de tir à la première personne développé par Treyarch et édité par Activision, la compétition sur cet Opus était un réel plaisir à regarder","../images/ImageCallOfDutyBO2.jfif");

let cs = new Game("CS",21/08/2012,"Counter-Strike: Global Offensive est un jeu de tir à la première personne multijoueur en ligne basé sur le jeu d'équipe développé par Valve Corporation, une référence dans l'esport pour le FPS, qui possède une audience conséquente même aujourd'hui","../images/ImageCounterStrikeGlobalOffensive.jpg");

let valorant = new Game("Valorant",2/06/2020,"Valorant est un jeu vidéo free-to-play de tir à la première personne en multijoueur développé et édité par Riot Games, sortie pendant le confinement le jeu à fais fureur, reprenant les code de Counter Strike tout en ajoutant un côté compétences.","../images/","ImageValorant.jfif");

let haloInfinite = new Game("Halo Infinite",15/11/2021,"Halo Infinite est un jeu vidéo de tir à la première personne développé par 343 Industries et édité par Xbox Game Studios. C'est le sixième jeu principal de la série Halo, faisant suite à Halo 5: Guardians sorti en 2015.","../images/HaloInfinite.jpg");

/*On stock nos jeux dans un tableau pour les parcourirs facilement*/
let gameArray = [mw2,b02,cs,valorant,haloInfinite];

/*On récupère les éléments du DOM lié au carrousel*/
let getCarrousel = document.getElementById("carrousel");
let getPreviousSwitch = document.getElementById("previousSwitch");
let getNextSwitch = document.getElementById("previousSwitch");

