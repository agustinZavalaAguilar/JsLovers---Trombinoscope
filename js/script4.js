/*Nous allons commencer par créer trois fecth qui alimenteront de façon dynamique
le DOM sur trois catégories de tri: année de promotion, nom de l'apprenant et compétences */

var Tab_competences_id = new Array () /* On déclare en variable globale un tableau ou on va stokertout les id des competences*/
var url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/competences?per_page=100'; /* Cette url nous permet d'intéroger l'API pour obtenir tous les cométences de la promotions */
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then(function (data) {

        let competences = data; /* Pour plus de clareté, on change de nom de variable de tous les résultat de l'api  */

        var div_competences = document.getElementById("liste_competences") /* On récupère la balise contenant l'id Liste Competences */
        var div_unecompetence = document.createElement("div")
        div_unecompetence.classList.add("box_label")
        div_unecompetence.innerHTML = "<input type='checkbox' class='case' id='selectionner_tout' name=''   />" +
            "<label id='selectionner_tout'> Tout Décocher </label> " /* Ici on écrit à l'intérieur de la div competence un bouton qui permetera de tous décocher ou cocher facilement */
            div_competences.appendChild(div_unecompetence)
        var index = -1 /* On définie un index qui va pouvoir permettre de naviger dans le tableau des id */
        /* Noter que le fonction map permet de créer une boucle */
        /* Elle va effectuer la même opération pour chaque compétences dans l'api */
        /* La fonction map ne créer pas d'incrémentation. Si nous en avons besoin nous devons le faire manuellement. Ce qui est fait ici */
        competences.map(function (competences) {
            index = index +1 /* on incrémente la variable */
            var div_unecompetence = document.createElement("div")
            div_unecompetence.classList.add("box_label")
            div_unecompetence.innerHTML += "<input type='checkbox' class='case' id='competence_" + competences.id + "'   name=''   />" +
                "<label id=" + competences.name + ">" + competences.name + "</label> " /* on écrit dans la div un bouton à cocher et la compétence qui lui est associé */
            div_competences.appendChild(div_unecompetence)
            Tab_competences_id[index] = competences.id 
            /* On ajoute un par un les id des compétences dans notre tableau Etape indispensable pour les filtres */
        });
    })
    .catch(function (error) {
        console.log(error);
    });

var tab_promotions_id = new Array() /* Même démarche on créer un tableau en globale qui stokera tout les id des promotions */

var url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/promotions?per_page=100'; /* Cette url nous permet d'intéroger l'API pour obtenir tous les promotions des étudients */

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then(function (data) {

        let promotions = data; /* Par souci de lecture de code on change le nom des données récupéré de l'api */

        var div_promotions = document.createElement("select") /* On va créer une balise select(munu déroulant) pour permettre de choisir une promotions */
        div_promotions.id = "selection_promotions" /* On affecte un id à la div créer */
        div_promotions.innerHTML = "<option id='toutes_les_années'>Toutes les années </option>" /* Valeur générale permettant de dire je veux tout les résultat peu importe les promotions */
        var index = -1 /* On redéfinie un index qui va pouvoir permettre de naviger dans le tableau des id de promotion */
        promotions.map(function (promotions) {
            index = index + 1 /* On incrémente la varible permettant de en gros de "changer de case dans le tableau" */
            div_promotions.innerHTML += "<option id=" + promotions.name + " >" + promotions.name + "</option>"
            tab_promotions_id[index] = promotions.id
            /* Dans notre select créer, on écrit pour chaque promotions une option possible dans le menu déroulant */
            document.getElementById("liste_annee").appendChild(div_promotions)
            /* C'est bien d'avoir créer la balise select, encore faut t'il l'affecter au dom sinon on ne poura jamais la voir
            Pour cela on utilise la fonction appendChild qui veut dire 
            "l'element de droite va à l'intérieur de l'élément de gauche"
            donc la div promotion(select) va être mis à l'intérieur la balise contenant l'id liste_annee
            Comme cette balise est dans notre index donc la div_promotions sera afficher dans le navigateur */
        });
    })
    .catch(function (error) {
        console.log(error);
    });


// Le bloc ci-dessous récupére la totalité des apprenants de la base des données
// et les affiche dans le DOM dés le téléchargement de la page.
// Une fonction de tri permette de masquer les apprenants ne pas passant le filtre

url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants?per_page=100'; /* Le paramètre
    per_page=100 contourne la limitation de wordpress de povoir afficher uniqument 10
    resultats à la fois */

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then(function (data) {
        let apprenant = data; /* On change de nom pour la clareté du code */
        var numero_carte = -1 /* On définie une incrémentation pour naviger dans un tableau */

        apprenant.map(function (apprenant) {


            numero_carte = numero_carte + 1 /* On augemente l'incrémentation de 1 */
            divCarteAprenants = document.createElement("div") /* On créer une div  qui stokera toutes les informations de chaque apprenants */
            divCarteAprenants.classList.add("carteApprenant") /* On lui ajoute la class "container" pour que le css puisse l'identifier et appliquer la mise en forme d'une carte */
            divCarteAprenants.id = "apprenant_" + numero_carte
            /* On rajoute un id dynamique qui changera selon les itérations 
             Important pour les filtres */

            divEnteteCarte = document.createElement("div") /* On créer l'entete de la carte en fonction du Wireframe*/
            divEnteteCarte.classList.add("en_tete_carte") /* On lui ajoute une class pour personalisé en css */ 
            divEnteteCarte.id = "en_tete_carte" /* On lui affecte un id */

            
            /* Condition si le champ nom  prenom et promotions de l'api est null */
            if (apprenant.nom == "") {
                apprenant.nom = "Aucun nom trouvé !"
            }
            if (apprenant.prenom == "") {
                apprenant.prenom = "Aucun prénom trouvé !"
            }
            if (apprenant.promotions == "") {
                apprenant.promotions = ""
            }

            divEnteteCarte.innerHTML =
                "<div class='nom'><p>" + apprenant.nom + "</p> </div>" +
                "<div class='prenom'><p>" + apprenant.prenom + "</p> </div>" +
                "<div class='annee'id='annee_apprenant_" + numero_carte + "'><p>" + apprenant.promotions + "</p>"


            divCarteAprenants.appendChild(divEnteteCarte)
            /* On met à l'entete de la carte apprenants dans la carte apprenants */
            /* Pour l'instant rien n'est afficher dans le dom car divCarteAprenants est une div que l'on vient de créer */

            divContenuCarte = document.createElement("div") /* On créer une div pour le contenu 
            Rappel : on créer nos div en fonctions du wareframe */
            divContenuCarte.classList.add("contenu_carte") /* On ajoute une class*/

            if (apprenant.image == "") {
                apprenant.image = "images/avatar_par_defaut.png"
                /*Si l'api ne contient aucune image on en propose une par défaut */
            }

            divContenuCarte.innerHTML =
                "<img src='" + apprenant.image + "'>" +
                "<div class='resumer' >" +
                "<p>" + apprenant.excerpt.rendered + "</p>" +
                "</div>"
            divCarteAprenants.appendChild(divContenuCarte)
            /* On met le contenu de la carte à l'intérieur de la divCarteAprenants
            Pour l'instant il y a l'entête et le contenu dans cette div */

            divLienCarte = document.createElement("div") /* On créer la dernière partie de la carte avec les liens */
            divLienCarte.classList.add("lien_carte") /* On lui ajoute une class*/

            /* Condition si les liens ne sont pas trouver dans l'api */
            /* Ici petite astuce, en ne mettant le contenu du lien à nul il ne pourra pas se matérialisé dans le dom même  */
            if (apprenant.portfolio == undefined) {
                contenu_du_lien = ""
            } else {
                contenu_du_lien = "<button class= 'button' >Adresse portfolio </button>"
            }

            divLienCarte.innerHTML +=
                "<a href='" + apprenant.portfolio + "'>" +
                contenu_du_lien +
                "</a>"

            if (apprenant.link == undefined) {
                contenu_du_lien = ""
            } else {
                contenu_du_lien = "<button class= 'button' > Lien cv </button>"
            }
            divLienCarte.innerHTML +=
                "<a href='" + apprenant.link + "'>" +
                contenu_du_lien +
                "</a>"
            if (apprenant.linkedin == undefined) {
                contenu_du_lien = ""
            } else {
                contenu_du_lien = "<img src='images/icone_linkedin.png'>"
            }
            divLienCarte.innerHTML +=
                "<a href='" + apprenant.linkedin + "'>" +
                contenu_du_lien +
                "</a>"

            divCarteAprenants.appendChild(divLienCarte)
            /* On ajoute les liens à notre div d'une carte apprenant */


            document.getElementById("carte_apprenants").appendChild(divCarteAprenants)
            /* Maintenant qu notre div Aprenant est complête on l'affecte à une div présente dans le dom afin de l'afficher */

            trouverAnnee(apprenant.promotions, numero_carte) 
            /* Fonction permettant de convertir le numéro de l'id de l'année par son nom car 
            l'id correspond à un nom de promo mais les utilisateurs ne le connaisse pas (Pas explicite) */
        
            /* On recommence toute cette opérations pour chaque apprenants par la boucle map*/
        });
    })
    .catch(function (error) {
        console.log(error);
    });




function trouverAnnee(id_annee, index) { // Récupère l'année de promotion de l'apprenant à partir de l'ID de la promo 
    var url_annee = "https://portfolios.ern-mende.fr/wp-json/wp/v2/promotions/" + id_annee;
    var textAnnee
    fetch(url_annee)
        .then((resp) => resp.json())
        .then(function (data) {
            var div_annee = document.getElementById("annee_apprenant_" + index);
            var textAnnee = data["name"];
            div_annee.innerHTML = "<p>" + textAnnee + "</p>"

        })
        .catch(function (error) {
            console.log(error);
        });



}















function appliquerfiltre() {
    /* Partie Année */
    url = 'https://portfolios.ern-mende.fr/wp-json/wp/v2/apprenants?per_page=100';
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(function (data) {
            let apprenant = data;
            for (index = 0; index < apprenant.length; index++) {
                var unApprenant = document.getElementById("apprenant_"+index)
                unApprenant.style.display = "flex";
            }
            var selectionCompetences = document.getElementById("selection_promotions")
            var anneeSelectionne = selectionCompetences.value
            if (anneeSelectionne == "Toutes les années"){
                // Si toutes les année sont sélectionner alors n'enlever aucune valeur 
            }else{
                for (index = 0; index < apprenant.length; index++) {
                    var anneeUnApprenant = document.getElementById("annee_apprenant_" + index)
                    if (anneeUnApprenant.innerHTML.includes(anneeSelectionne)== false){
                        var unApprenant = document.getElementById("apprenant_"+index)
                        unApprenant.style.display = "none";
                    }
                }
            }
            var choix_competences = new Array()
            var index2 = 0
            for (var index = 0 ; index < Tab_competences_id.length ; index++){
                var case_cocher_competences = document.getElementById("competence_"+Tab_competences_id[index])
                if (case_cocher_competences.checked == true) {
                    choix_competences[index2] = Tab_competences_id[index]
                    index2 = index2 +1 
                }
            }
            console.clear
            console.log(choix_competences);
            for (index = 0; index < apprenant.length; index++) {
                console.log(apprenant[index]["prenom"])
                console.log(apprenant[index]["competences"])
                for (index2 = 0 ; index2 < choix_competences.length ; index2++) {
                    if ((apprenant[index]["competences"].includes(choix_competences[index2]) == false)){
                        var unApprenant = document.getElementById("apprenant_"+index)
                        unApprenant.style.display = "none";
                    }
                }  
            }
            var recherche = document.getElementById("MyResearch")
            console.log("recherche")
            valeurAChercher = recherche.value
            if (valeurAChercher != ""){
                for (var index = 0 ; index < apprenant.length; index++){
                    console.log(apprenant[index]["nom"])
                    var nom_apprenant = apprenant[index]["nom"].toLowerCase()
                    var prenom_apprenant = apprenant[index]["prenom"].toLowerCase()
                    valeurAChercher = valeurAChercher.toLowerCase()
                    console.log(valeurAChercher)
                    if ((nom_apprenant.includes(valeurAChercher) == true)  ||(prenom_apprenant.includes(valeurAChercher) == true)){
                        console.log("trouvé")
                    }else{
                        var unApprenant = document.getElementById("apprenant_"+index)
                        unApprenant.style.display = "none";
                    }
                }
            }




            
























           /* console.log("heeeeeeeeeeeeeeeeeelo")
            var touteLesCompetences = document.getElementById("liste_competences")

            console.log(touteLesCompetences)

            Tab_competences_et_label = Array.from(touteLesCompetences.childNodes);
            console.log(Tab_competences_et_label)
            var compteur = -1
            var Tab_competences = new Array();
            Tab_competences[0] = "hey"
            var index2 = 0
            for (var index = 0; index < Tab_competences_et_label.length; index++) {

                if (index % 3 == 0) {
                    Tab_competences[index2] = Tab_competences_et_label[index]

                    index2 = index2 + 1
                }



            }
            console.log(Tab_competences)
            var Tab_competences_id = new Array()
            for (var index = 0; index < Tab_competences.length; index++) {
                Tab_competences_id[index] = Tab_competences[index].id.substr(11)
            }

            console.log(Tab_competences_id.length)

            for (var index = 0; index < Tab_competences_id.length; index++) {
                var case_coche = document.getElementById("competence_" + index)
                console.log("hallo")
                console.log(case_coche)
                if (case_coche.checked == false) {
                    Tab_competences_id[index] = ""
                }

            }
            console.log(Tab_competences_id)*/




        })
        .catch(function (error) {
            console.log(error);
        });







}
