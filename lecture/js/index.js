document.getElementById('Click').addEventListener('click',
    function (){
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        if (isNaN(height) || isNaN(weight)) {
            console.log("키와 몸무게를 올바르게 입력하세요.");
            return;
        }
        const preBMI = weight / (height * height);
    console.log("당신의 BMI 지수는 ", Number.prototype.toFixed(BMI),"입니다.");
    }
    );