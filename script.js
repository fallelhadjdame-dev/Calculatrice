document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultsDiv = document.getElementById('results');

    // Contrôle de saisie : vérifier si les champs sont remplis et numériques
    if (isNaN(num1) || isNaN(num2)) {
        resultsDiv.innerHTML = '<p class="error">Erreur : Veuillez saisir des nombres valides dans les deux champs.</p>';
        return;
    }

    // Gestion division par zéro
    if (num2 === 0) {
        resultsDiv.innerHTML = '<p class="error">Erreur : Division par zéro impossible !</p>';
        return;
    }

    // Calculs
    const somme = num1 + num2;
    const difference = num1 - num2;
    const produit = num1 * num2;
    const quotient = num1 / num2;

    // Affichage des résultats via DOM
    resultsDiv.innerHTML = `
        <p>Somme : ${somme}</p>
        <p>Différence : ${difference}</p>
        <p>Produit : ${produit}</p>
        <p>Quotient : ${quotient}</p>
    `;
    resultsDiv.className = 'success';
});

// Commentaire : Ce script manipule le DOM, valide les entrées et gère les erreurs sans alertes.
