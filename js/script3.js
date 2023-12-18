
   // Le bloc ci-dessous récupére les compétences contenues dans la basse de données. 
   // Ensuite, il insére les compétences dans le DOM afin de s'en servir pour trier les apprenants

    var url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/competences?per_page=100';

    fetch(url)
    .then((response) => {
    return response.json();
    })
    .then(function(data) {
        let competences = data;

        var div_competences=  document.getElementById("liste_competences")
        div_competences.innerHTML = "<input type='checkbox' id='selectionner_tout' name=''  checked />" + 
            "<label id='selectionner_tout'> Tout Décocher </label> "

        competences.map(function(competences) {
            div_competences.innerHTML += "<input type='checkbox' id='competence_"+competences.id+"'   name=''  checked />" + 
            "<label id="+competences.name+">"+competences.name+"</label> "

        });
    })
    .catch(function(error) {
    console.log(error);
    });

   // Le bloc ci-dessous récupére les compétences contenues dans la basse de données. 
   // Ensuite, il insére les compétences dans le DOM afin de s'en servir pour trier les apprenants

    var url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/promotions?per_page=100';

    fetch(url)
    .then((response) => {
    return response.json();
    })
    .then(function(data) {
        let promotions = data;

        var div_promotions= document.createElement("select")
        div_promotions.id = "selection_competences"
        div_promotions.innerHTML = "<option id='toute_annee'>Toutes les année </option>"
        promotions.map(function(promotions) {
            div_promotions.innerHTML += "<option id="+promotions.name+" >"+promotions.name+"</option>"
            

            document.getElementById("liste_annee").appendChild(div_promotions)

        });
    })
    .catch(function(error) {
    console.log(error);
    });



    url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants?per_page=100';

    fetch(url)
    .then((response) => {
    return response.json();
    })
    .then(function(data) {
    let apprenant = data;
        var  numero_carte = -1
         console.log(apprenant)
    apprenant.map(function(apprenant) {

       
       numero_carte = numero_carte +1
        divCarteAprenants = document.createElement("div")
        divCarteAprenants.classList.add("container")
        divCarteAprenants.id = "apprenant_"+numero_carte

        divEnteteCarte = document.createElement("div")
        divEnteteCarte.classList.add("en_tete_carte")
        divEnteteCarte.id = "en_tete_carte"
        /* Condition si le champ nom  prenom et promotions de l'api est null */
        if (apprenant.nom == ""){
            apprenant.nom = "Aucun nom trouvé !"
        }
        if (apprenant.prenom == ""){
            apprenant.prenom = "Aucun prénom trouvé !"
        }
        if (apprenant.promotions == ""){
            apprenant.prenom = "aucune année est associé à cet apprenants ! "
        }
        
        divEnteteCarte.innerHTML = 
            "<div class='nom'><p>"+apprenant.nom+"</p> </div>"+
            "<div class='prenom'><p>"+apprenant.prenom+"</p> </div>" +
            "<div class='annee'id='annee_apprenant_"+numero_carte+"'><p>"+apprenant.promotions+"</p>"
        
    
        divCarteAprenants.appendChild(divEnteteCarte)
            

        divContenuCarte = document.createElement("div")
        divContenuCarte.classList.add("contenu_carte")

        if (apprenant.image == ""){
            apprenant.image = "images/avatar_par_defaut.png"
        }

        divContenuCarte.innerHTML = 
            "<img src='" + apprenant.image + "'>"+
            "<div class='resumer' >" +
                "<p>"+ apprenant.excerpt.rendered + "</p>" +
            "</div>"
        divCarteAprenants.appendChild(divContenuCarte)


        divLienCarte = document.createElement("div")
        divLienCarte.classList.add("lien_carte")

        /* Condition si les liens ne sont pas trouver dans l'api */
            if(apprenant.portfolio  == undefined){
                contenu_du_lien = ""
            }else{
                contenu_du_lien = "<button class= 'button' >Adresse portfolio </button>" 
            }

            divLienCarte.innerHTML += 
            "<a href='"+ apprenant.portfolio + "'>" +
                contenu_du_lien + 
            "</a>"

            if(apprenant.link  == undefined){
                contenu_du_lien = ""
            }else{
                contenu_du_lien = "<button class= 'button' > Lien cv </button>"
            }
            divLienCarte.innerHTML += 
            "<a href='" + apprenant.link + "'>"+
                contenu_du_lien +
            "</a>"
            if(apprenant.linkedin == undefined){
                contenu_du_lien = ""
            }else{
                contenu_du_lien = "<img src='images/icone_linkedin.png'>" 
            }
            divLienCarte.innerHTML += 
            "<a href='" + apprenant.linkedin + "'>"+ 
                    contenu_du_lien + 
            "</a>"

        divCarteAprenants.appendChild(divLienCarte)


        document.getElementById("carte_apprenants").appendChild(divCarteAprenants)
        });
    })
    .catch(function(error) {
    console.log(error);
    });

   

// La fonction ci-dessous récupère l'année de promotion de l'apprenant à partir de l'ID de la promo 
function trouverAnnee(id_annee,data){ 
        var url_annee = "https://portfolios.ern-mende.fr/wp-json/wp/v2/promotions/"+id_annee;
        var textAnnee
        fetch(url_annee)
        .then((resp) => resp.json())
        .then(function(data) {
            textAnnee  = data["name"];
            divEnteteCarte.innerHTML +=  "<div class='annee'><p>"+data.promotions+"</p>"
        })
        .catch(function(error) {
        console.log(error);
        });



}

// Fonction qui permette de masquer les apprennants que ne passent pas le filtre
function apliquerFiltre(){


    url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants?per_page=100';

    fetch(url)
    .then((response) => {
    return response.json();
    })
    .then(function(data) {
    let apprenant = data;
        console.log("heeeeeeeeeeeeeeeeeelo")
        var touteLesCompetences = document.getElementById("liste_competences")
    
        console.log(touteLesCompetences)
    
        Tab_competences_et_label = Array.from(touteLesCompetences.childNodes);
        console.log(Tab_competences_et_label)
        var compteur = -1
        var Tab_competences =  new Array();
        Tab_competences[0] = "hey"
        var index2 = 0
        for ( var index=0 ; index < Tab_competences_et_label.length ; index++){
            
            if (index % 3 == 0 ){
                Tab_competences[index2] = Tab_competences_et_label[index]
               
                index2 = index2 + 1 
            }
            
    
    
        }
        console.log(Tab_competences)
        var Tab_competences_id = new Array ()
        for  (var index=0 ; index < Tab_competences.length ; index++){
                Tab_competences_id[index] = Tab_competences[index].id.substr(11)
        }

        console.log(Tab_competences_id.length)

        for (var index = 0 ; index < Tab_competences_id.length ; index++ ){
            var case_coche = document.getElementById("competence_"+index)
            console.log("hallo")
            console.log(case_coche)
            if (case_coche.checked == false){
                Tab_competences_id[index] = ""
            }

        }
        console.log(Tab_competences_id )
        
    
    
      
    })
    .catch(function(error) {
    console.log(error);
    });


    




}
