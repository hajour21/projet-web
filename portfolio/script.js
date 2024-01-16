function submitForm() {
  
    var firstName = document.getElementById("firstName").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country").value;
    var diplomas = getSelectedDiplomas();
  
  
    console.log("Prénom:", firstName);
    console.log("Nom:", name);
    console.log("E-mail:", email);
    console.log("Téléphone:", phone);
    console.log("Pays:", country);
    console.log("Diplômes obtenus:", diplomas);
  
    // Ajoutez ici le code pour traiter les données du formulaire, par exemple, en les envoyant à un serveur
    // Pour l'instant, affichons simplement un message d'alerte
    alert("Formulaire soumis avec succès!");
}


function getSelectedDiplomas() {
    var selectedDiplomas = [];
    var diplomasSelect = document.getElementById("diplomas");
  
    for (var i = 0; i < diplomasSelect.options.length; i++) {
        if (diplomasSelect.options[i].selected) {
            selectedDiplomas.push(diplomasSelect.options[i].value);
        }
    }
  
    return selectedDiplomas;
}
