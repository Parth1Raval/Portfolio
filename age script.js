document.getElementById("calculate").addEventListener("click", function() {
    const birthdateInput = document.getElementById("birthdate").value;
    if (!birthdateInput) {
        alert("Please enter a valid birthdate.");
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();

    let ageYears = today.getFullYear() - birthdate.getFullYear();
    let ageMonths = today.getMonth() - birthdate.getMonth();
    let ageDays = today.getDate() - birthdate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});