function submitQuiz() {
    // Récupérer les réponses sélectionnées
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    var q2Answer = document.querySelector('input[name="q2"]:checked');
    var q3Answer = document.querySelector('input[name="q3"]:checked');
    var q4Answer = document.querySelector('input[name="q4"]:checked');
    var q5Answer = document.querySelector('input[name="q5"]:checked');
    var q6Answer = document.querySelector('input[name="q6"]:checked');
    var q7Answer = document.querySelector('input[name="q7"]:checked');
    var q8Answer = document.querySelector('input[name="q8"]:checked');

    // Vérifier si toutes les questions ont été répondues
    if (q1Answer && q2Answer && q3Answer && q4Answer && q5Answer && q6Answer && q7Answer && q8Answer) {
        // Calculer le score
        var score = 0;
        if (q1Answer.value === 'a') score++;
        if (q2Answer.value === 'c') score++;
        if (q3Answer.value === 'c') score++;
        if (q4Answer.value === 'a') score++;
        if (q5Answer.value === 'b') score++;
        if (q6Answer.value === 'c') score++;
        if (q7Answer.value === 'b') score++;
        if (q8Answer.value === 'a') score++;

        // Afficher les résultats
        var resultContainer = document.getElementById('result');
        resultContainer.innerHTML = 'Score : ' + score + ' / 8';

        // Ajoutez ici le code pour traiter les réponses du quiz (par exemple, enregistrez-les, etc.)
    } else {
        alert("Veuillez répondre à toutes les questions du quiz.");
    }
}
