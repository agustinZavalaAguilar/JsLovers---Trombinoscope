function changercouleur(){
    var texte = document.getElementById("a")


    texte.classList.toggle("couleur_red")
}function changercouleur(){
    var texte = document.getElementById("a")


    texte.classList.toggle("couleur_red")
}


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


var Tab_element_apprenants = ["nom","prenom", "annee", "avatar", "extrait", "portfolio","cv"]
var Tab_clé_element = ["nom","prenom","promotions","image","excerpt","portfolio","link"]

const url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    
    var index = 0
    var index_Tab_element_apprenants = 0 
    valeur_max_trobi = data.length
    for (index=0 ; index < data.length; index++ ){
        for (index_Tab_element_apprenants; index_Tab_element_apprenants < Tab_element_apprenants.length; index_Tab_element_apprenants++){
            

            switch(Tab_element_apprenants[index_Tab_element_apprenants]){
                case "annee" : 
                    id_de_annee = data[index]["promotions"][0];
                    trouverAnnee(id_de_annee,index)
                    break;
                default : 
                    var textAEcrire
                    var Apprenant = document.getElementById(Tab_element_apprenants[index_Tab_element_apprenants]+index)
                    Apprenant.style.display = "block"
                    if (Tab_element_apprenants[index_Tab_element_apprenants] == "extrait"){
                        textAEcrire  = data[0]["excerpt"]["rendered"];
                    }else{
                        textAEcrire = data[index][Tab_clé_element[index_Tab_element_apprenants]]  
                    }
                    if (Tab_element_apprenants[index_Tab_element_apprenants]== "avatar"  ){
                        Apprenant.src = textAEcrire 
                    }else{
                        if (Tab_element_apprenants[index_Tab_element_apprenants]== "portfolio" ||  Tab_element_apprenants[index_Tab_element_apprenants]== "cv"){
                            Apprenant.href = textAEcrire 
                        }else{
                           Apprenant.innerHTML = Tab_element_apprenants[index_Tab_element_apprenants]+" : "+textAEcrire  
                        }
                    }
            }
        }
        index_Tab_element_apprenants = 0



    /*var Apprenant1_nom = document.getElementById("nom"+index);
    
    var textAEcrire  = data[index]["nom"];
    Apprenant1_nom.innerHTML = "Nom : "+textAEcrire
    
    var Apprenant1_prenom = document.getElementById('prenom'+index);
    textAEcrire  = data[index]["prenom"];
    Apprenant1_prenom.innerHTML = "Prénom :"+textAEcrire

    
        id_de_annee = data[0]["promotions"][0];
        trouverAnnee(id_de_annee,index)

   
    


    
    var Apprenant1_avatar = document.getElementById('avatar'+index);
    textAEcrire  = data[index]["image"];
    Apprenant1_avatar.src = textAEcrire

    var Apprenant1_extrait = document.getElementById('extrait'+index);
    textAEcrire  = data[0]["excerpt"]["rendered"];
    Apprenant1_extrait.innerHTML = textAEcrire

    var Apprenant1_portfolio = document.getElementById('portfolio'+index);
    textAEcrire  = data[index]["portfolio"];
    if (textAEcrire == undefined){
        Apprenant1_portfolio.style.display = "none"
    }else{
        Apprenant1_portfolio.innerHTML = "Portfolio"
        Apprenant1_portfolio.href = textAEcrire
    }
    

    var Apprenant1_cv = document.getElementById('cv'+index);
    textAEcrire  = data[index]["link"];
    Apprenant1_cv.href = textAEcrire*/

    }

    
   

})
.catch(function(error) {
  console.log(error);
});


function afficherTousLesApprenants(){




    
const url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    

    /*var index = 0
    var index_Tab_element_apprenants = 0
    valeur_max_trobi = data.length
    for (index=0 ; index < data.length; index++ ){
        for (index_Tab_element_apprenants; index_Tab_element_apprenants < Tab_element_apprenants.length; index_Tab_element_apprenants++){
            

            switch(Tab_element_apprenants[index_Tab_element_apprenants]){
                case "annee" : 
                    id_de_annee = data[index]["promotions"][0];
                    trouverAnnee(id_de_annee,index)
                    break;
                default : 
                    var textAEcrire
                    var Apprenant = document.getElementById(Tab_element_apprenants[index_Tab_element_apprenants]+index)
                    Apprenant.style.display = "block"
                    if (Tab_element_apprenants[index_Tab_element_apprenants] == "extrait"){
                        textAEcrire  = data[0]["excerpt"]["rendered"];
                    }else{
                        textAEcrire = data[index][Tab_clé_element[index_Tab_element_apprenants]]  
                    }
                    if (Tab_element_apprenants[index_Tab_element_apprenants]== "avatar"  ){
                        Apprenant.src = textAEcrire 
                    }else{
                        if (Tab_element_apprenants[index_Tab_element_apprenants]== "portfolio" ||  Tab_element_apprenants[index_Tab_element_apprenants]== "cv"){
                            Apprenant.href = textAEcrire 
                        }else{
                           Apprenant.innerHTML = Tab_element_apprenants[index_Tab_element_apprenants]+" : "+textAEcrire  
                        }
                    }
            }
        }
        index_Tab_element_apprenants = 0*/

    /*var Apprenant_nom = document.getElementById("nom"+index);
    
    var textAEcrire  = data[index]["nom"];
    Apprenant_nom.innerHTML = "Nom : "+textAEcrire
    Apprenant_nom.style.display = "block"
    
    var Apprenant_prenom = document.getElementById('prenom'+index);
    textAEcrire  = data[index]["prenom"];
    Apprenant_prenom.innerHTML = "Prénom :"+textAEcrire
    Apprenant_prenom.style.display = "block"
    
        id_de_annee = data[0]["promotions"][0];
        trouverAnnee(id_de_annee,index)

   
    


    
    var Apprenant_avatar = document.getElementById('avatar'+index);
    textAEcrire  = data[index]["image"];
    Apprenant_avatar.src = textAEcrire
    Apprenant_avatar.style.display = "block"

    var Apprenant_extrait = document.getElementById('extrait'+index);
    textAEcrire  = data[0]["excerpt"]["rendered"];
    Apprenant_extrait.innerHTML = textAEcrire
    Apprenant_extrait.style.display = "block"

    var Apprenant_portfolio = document.getElementById('portfolio'+index);
    textAEcrire  = data[index]["portfolio"];
    if (textAEcrire == undefined){
        Apprenant_portfolio.style.display = "none"
    }else{
        Apprenant_portfolio.innerHTML = "Portfolio"
        Apprenant_portfolio.href = textAEcrire
        Apprenant_portfolio.style.display = "block"
    }
    

    var Apprenant_cv = document.getElementById('cv'+index);
    textAEcrire  = data[index]["link"];
    Apprenant_cv.href = textAEcrire
    Apprenant_portfolio.style.display = "block"*/

    

    
   

})
.catch(function(error) {
  console.log(error);
});

}

function trouverAnnee(id_annee, index){ // Récupère l'année de promotion de l'apprenant à partir de l'ID de la promo 

    var url_annee = "https://portfolios.ern-mende.fr/wp-json/wp/v2/promotions/"+id_annee;//AZ: j'ai enlevé le caractère spécial: "é"

fetch(url_annee)
.then((resp) => resp.json())
.then(function(data) {
    console.log(data)
    var Apprenant_annee = document.getElementById('annee'+index);
    textAnnee  = data["name"];
    Apprenant_annee.innerHTML = "Année : "+textAnnee
    Apprenant_annee.style.display = "block"
 
})
.catch(function(error) {
  console.log(error);
});



}



function RechercheParNom(){

    var querry = document.getElementById("recherche")
    recherche = querry.value
    var url_recherche = "https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants?search="+recherche

    fetch(url_recherche)
    .then((resp) => resp.json())
    .then(function(data) {

        console.log(recherche)
    if (recherche == ""){
        console.log("true")
        afficherTousLesApprenants()



    }else{
         var index = 0
    console.log(data.length)
    for (index=0 ; index < data.length; index++ ){
        
    var Apprenant1_nom = document.getElementById("nom"+index);
    
    var textAEcrire  = data[index]["nom"];
    Apprenant1_nom.innerHTML = "Nom : "+textAEcrire
    
    var Apprenant1_prenom = document.getElementById('prenom'+index);
    textAEcrire  = data[index]["prenom"];
    Apprenant1_prenom.innerHTML = "Prénom :"+textAEcrire

    
        id_de_annee = data[0]["promotions"][0];
        trouverAnnee(id_de_annee,index)

   
    


    
    var Apprenant1_avatar = document.getElementById('avatar'+index);
    textAEcrire  = data[index]["image"];
    Apprenant1_avatar.src = textAEcrire

    var Apprenant1_extrait = document.getElementById('extrait'+index);
    textAEcrire  = data[0]["excerpt"]["rendered"];
    Apprenant1_extrait.innerHTML = textAEcrire

    var Apprenant1_portfolio = document.getElementById('portfolio'+index);
    textAEcrire  = data[index]["portfolio"];
    if (textAEcrire == undefined){
        Apprenant1_portfolio.innerHTML = "Cette apprenant n'a aucun portfolio !"
    }else{
        Apprenant1_portfolio.href = textAEcrire
    }
    

    var Apprenant1_cv = document.getElementById('cv'+index);
    textAEcrire  = data[index]["link"];
    Apprenant1_cv.href = textAEcrire

    }
    var index_Tab_element_apprenants = 0
    for (index; index < valeur_max_trobi; index++){
        console.log("hello")
        for (index_Tab_element_apprenants; index_Tab_element_apprenants < Tab_element_apprenants.length ; index_Tab_element_apprenants++ ){
           Apprenant = document.getElementById(Tab_element_apprenants[index_Tab_element_apprenants]+index)
           Apprenant.style.display= "none"
        }
        index_Tab_element_apprenants = 0

        /*Apprenant1_nom = document.getElementById("nom"+index);
        Apprenant1_nom.style.display= "none"

        Apprenant1_prenom = document.getElementById("prenom"+index);
        Apprenant1_prenom.style.display= "none"

        Apprenant1_nom = document.getElementById("extrait"+index);
        Apprenant1_nom.style.display= "none"

        Apprenant1_nom = document.getElementById("annee"+index);
        Apprenant1_nom.style.display= "none"

        Apprenant1_nom = document.getElementById("avatar"+index);
        Apprenant1_nom.style.display= "none"
        
        Apprenant1_nom = document.getElementById("portfolio"+index);
        Apprenant1_nom.style.display= "none"

        Apprenant1_nom = document.getElementById("cv"+index);
        Apprenant1_nom.style.display= "none"

        Apprenant1_nom = document.getElementById("avatar"+index);
        Apprenant1_nom.style.display= "none"*/


    }
    }
   
       
    })
    .catch(function(error) {
    console.log(error);
    });




}

/*  console.log(data)
    console.log(data[0]["nom"])
    var Apprenant1_nom = document.getElementById('nom1');
    
    var textAEcrire  = data[0]["nom"];
    Apprenant1_nom.innerHTML = "Nom : "+textAEcrire
    
    var Apprenant1_prenom = document.getElementById('premon1');
    textAEcrire  = data[0]["prenom"];
    Apprenant1_prenom.innerHTML = "Prénom :"+textAEcrire


    var Apprenant1_annee = document.getElementById('annee1');
    id_de_annee = data[0]["promotions"][0];
    trouverAnnee(id_de_annee)
    


    
    var Apprenant1_avatar = document.getElementById('avatar1');
    textAEcrire  = data[0]["image"];
    Apprenant1_avatar.src = textAEcrire

    var Apprenant1_extrait = document.getElementById('extrait1');
    textAEcrire  = data[0]["excerpt"]["rendered"];
    Apprenant1_extrait.innerHTML = textAEcrire

    var Apprenant1_portfolio = document.getElementById('portfolio1');
    textAEcrire  = data[0]["portfolio"];
    Apprenant1_portfolio.href = textAEcrire

    var Apprenant1_cv = document.getElementById('cv1');
    textAEcrire  = data[0]["link"];
    Apprenant1_cv.href = textAEcrire

    var Apprenant1_cv = document.getElementById('cv1');
    textAEcrire  = data[0]["link"];
    Apprenant1_cv.href = textAEcrire */

/**
 * Commentaires pour expliquer le code de récupération des donnés via l'API, ci dessous: ------------------------
 * todo: 1) Ecrire la structure=> fait
 * todo: 2) Trouver la bonne requette avec postman=> fait
 * todo: 3) Mettre l'élement déclencheur sur l'index html => fait
 * todo: 4) Ecrire des donnée dans le DOM (document html) pour un seul apprenant => fait
 * todo: 5) Faire la boucle pour tout les aprenants 
 * 
 */

    function filtreAnnee2022(){  //Récupère les donnes des apprenants de la promo 2022-2023

        const url = "https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants?promotions=15" //Réquette HTTP. L'ID 15 corresponds à la promo 2022-2023

        fetch(url) //Permets d'intérroger une base de données via l'API
        .then((resp) => resp.json())//formattage du document
        .then(function(data) {//Traitement des données récupérées
            console.log(data); //Affiche dans la console les resultats de la requette
            console.log(data[0].prenom)//Affiche dans la console le prénom de l'apprenant num 6

            
            for(var incrementation =0; incrementation < data.length; incrementation++ ){



            var nom = document.createElement("p")
            nom.innerHTML = data[incrementation].nom;

            var prenom =document.createElement("p")//Selectionne la balise qui contient l'id "prenom0"
            prenom.innerHTML = data[incrementation].prenom;



            var image = document.createElement("img")//Selectionne la balise qui contient l'id "avatar0"
            image.src = data[incrementation].image;

            var extrait = document.createElement("p")//Selectionne la balise qui contient l'id "extrait0"
            extrait.innerHTML = data[incrementation].excerpt.rendered;
        
            var lienPortfolio = document.createElement("a")
            lienPortfolio.href = data[incrementation].portfolio;
            lienPortfolio.innerHTML = "<button class= 'button' >Adresse portfolio</button>"

            var lienCV = document.createElement("a")//Selectionne la balise qui contient l'id "cv0"
            lienCV.href = data[incrementation].link;
            lienCV.innerHTML ="<button class='button'>Lien vers le cv</button>"

            var linkedin = document.createElement("a")//Selectionne la balise qui contient l'id "linkedin0"
            linkedin.href = data[incrementation].linkedin;
            linkedin.innerHTML = "<img src='JsLovers---Trombinoscope/images/linkedin.png'>"
            


            var carteapprenant = document.createElement("div")
            carteapprenant.classList.add("container")
            carteapprenant.appendChild(nom)
            carteapprenant.appendChild(prenom)
            carteapprenant.appendChild(image)
            carteapprenant.appendChild(extrait)
            carteapprenant.appendChild(lienPortfolio)
            carteapprenant.appendChild(lienCV)
            carteapprenant.appendChild(linkedin)


            document.getElementById("carte_apprenants").appendChild(carteapprenant);





            
            }



        })
        .catch(function(error) {//S'il y a une erreur dans la reponse 
        console.log(error);//affiche l'erreur dans la console
        });



    }