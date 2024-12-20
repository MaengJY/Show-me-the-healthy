document.getElementById('calculate').addEventListener('click', function () {
    const age = parseInt(document.getElementById('age').value, 10);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const dailyCalories = parseFloat(document.getElementById('calories').value);

    if (isNaN(age) || isNaN(height) || isNaN(weight) || isNaN(dailyCalories)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    // Calculate BMI
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

    // Calculate recommended daily calorie intake (using Mifflin-St Jeor Equation)
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // For males
    const recommendedCalories = Math.round(bmr * 1.55); // Assuming moderate activity level

    // Display results
    document.getElementById('bmi-result').textContent = `Your BMI: ${bmi}`;
    document.getElementById('calorie-recommendation').textContent = 
        `Recommended Daily Calorie Intake: ${recommendedCalories} kcal`;

    // Check calorie balance
    if (dailyCalories > recommendedCalories) {
        document.getElementById('calorie-recommendation').textContent += 
            ` (You are consuming more than recommended!)`;
    } else if (dailyCalories < recommendedCalories) {
        document.getElementById('calorie-recommendation').textContent += 
            ` (You are consuming less than recommended!)`;
    }
});
