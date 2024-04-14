   document.addEventListener("DOMContentLoaded", function() {
    const taxForm = document.getElementById('taxForm');
    const resultModal = document.getElementById('resultModal');
    const closeButton = document.querySelector('.close');
    const closeBtnModal = document.querySelector('.close-button');
    const grossIncomeInput = document.getElementById('grossIncome');
    const extraIncomeInput = document.getElementById('extraIncome');
    const deductionsInput = document.getElementById('deductions');
    const ageInput = document.getElementById('age');
    const errorIcon = document.getElementById("errorIcon");
    const errorIconOne = document.getElementById("errorIconOne");
    const errorIconTwo = document.getElementById("errorIconTwo");
    const tooltip = document.getElementById("tooltip");
    const tooltipTwo = document.getElementById("tooltipTwo");

    taxForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const grossIncome = parseFloat(grossIncomeInput.value) || 0;
        const extraIncome = parseFloat(extraIncomeInput.value) || 0;
        const deductions = parseFloat(deductionsInput.value) || 0;
        const age = ageInput.value;

        let overallIncome = grossIncome + extraIncome - deductions;
        let tax = 0;

        if (overallIncome <= 800000) {
            // No tax if overall income is under 8 Lakhs
            tax = 0;
        } else {
            // Calculate tax based on income over 8 Lakhs
            const incomeOver8Lakhs = overallIncome - 800000;
            if (age === '<40') {
                tax = 0.3 * incomeOver8Lakhs;
            } else if (age === '≥40 & <60') {
                tax = 0.4 * incomeOver8Lakhs;
            } else if (age === '≥60') {
                tax = 0.1 * incomeOver8Lakhs;
            }
        }

        overallIncome -= tax;

        const result = document.getElementById('result');
        result.innerHTML = `₹${overallIncome.toFixed(2)}`;

        resultModal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        resultModal.style.display = 'none';
    });

    closeBtnModal.addEventListener('click', function() {
        resultModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === resultModal){
            resultModal.style.display = 'none';
        }
    });

    [grossIncomeInput, extraIncomeInput, deductionsInput, ageInput].forEach(input => {
        input.addEventListener('input', function() {
            if (!this.value || isNaN(parseFloat(this.value))) {
                this.nextElementSibling.style.display = 'inline-block';
            } else {
                this.nextElementSibling.style.display = 'none';
            }
        });
    });



    errorIcon.addEventListener("mouseenter", function() {
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = "1";
    });

    errorIcon.addEventListener("mouseleave", function() {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "1";
    });
    grossIncomeInput.addEventListener("input", function() {
        const inputValue = grossIncome.value.trim();

        // Check if the input value is invalid (not a number)
        if (isNaN(inputValue)) {
            // Show error icon
            errorIcon.style.display = "inline-block";
        } else {
            // Hide error icon
            errorIcon.style.display = "none";
        }
    });



    errorIconOne.addEventListener("mouseenter", function() {
        tooltipTwo.style.visibility = "visible";
        tooltipTwo.style.opacity = "1";
    });

    errorIconOne.addEventListener("mouseleave", function() {
        tooltipTwo.style.visibility = "hidden";
        tooltipTwo.style.opacity = "1";
    });
    extraIncomeInput.addEventListener("input", function() {
        const inputValue = extraIncome.value.trim();

        // Check if the input value is invalid (not a number)
        if (isNaN(inputValue)) {
            // Show error icon
            errorIconOne.style.display = "inline-block";
        } else {
            // Hide error icon
            errorIconOne.style.display = "none";
        }
    });


    errorIconTwo.addEventListener("mouseenter", function() {
        tooltipThree.style.visibility = "visible";
        tooltipThree.style.opacity = "1";
    });

    errorIconTwo.addEventListener("mouseleave", function() {
        tooltipThree.style.visibility = "hidden";
        tooltipThree.style.opacity = "1";
    });
    deductionsInput.addEventListener("input", function() {
        const inputValue = deductions.value.trim();

        // Check if the input value is invalid (not a number)
        if (isNaN(inputValue)) {
            // Show error icon
            errorIconTwo.style.display = "inline-block";
        } else {
            // Hide error icon
            errorIconTwo.style.display = "none";
        }
    });
});

