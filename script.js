function multiplyBy()
{
        age1 = document.getElementById("age").value;
        oldAge1 = document.getElementById("oldAge").value;

        var lifeDays = (oldAge1 - age1)* 365;
        var lifeWeeks = parseInt(oldAge1 - age1)* 52;
        var lifeMonths = parseInt(oldAge1 - age1)*12;
        var lifeYears = parseInt(oldAge1 - age1);

        const message = `You have<br> ${lifeDays} days,<br>
        ${lifeWeeks} weeks,<br>
        ${lifeMonths} months,<br>
        ${lifeYears} years <br>
        left before you age to ${oldAge1} years old. `; 

        document.getElementById("result").innerHTML = message;
}
