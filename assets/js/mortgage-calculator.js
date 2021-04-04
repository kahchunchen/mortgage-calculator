$(":input").bind("keyup change", function (e) {
    getValues();
})

$("#resultDiv").hide();
$("#amortizationDiv").hide();

function replaceNumberWithCommas(yourNumber) {
    //Seperates the components of the number
    var n = yourNumber.toString().split(".");
    //Comma-fies the first part
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Combines the two sections
    return n.join(".");
}

function getValues() {
    //button click gets values from inputs
    var balance = parseFloat(document.getElementById("loanAmount").value);
    var interestRate =
        parseFloat(document.getElementById("interest").value / 100.0);
    var terms = parseInt(document.getElementById("terms").value * 12);

    //set the div string
    var div = document.getElementById("Result");

    //in case of a re-calc, clear out the div!
    div.innerHTML = "";

    //validate inputs - display error if invalid, otherwise, display table
    var balVal = validateInputs(balance);
    var intrVal = validateInputs(interestRate);

    if (balVal && intrVal) {
        //Returns div string if inputs are valid
        $("#resultDiv").show();
        $("#amortizationDiv").show();

        div.innerHTML += amort(balance, interestRate, terms);
    }
}

/**
 * Amort function:
 * Calculates the necessary elements of the loan using the supplied user input
 * and then displays each months updated amortization schedule on the page
 */
function amort(balance, interestRate, terms) {
    //Calculate the per month interest rate
    var monthlyRate = interestRate / 12;

    //Calculate the payment
    var payment = balance * (monthlyRate / (1 - Math.pow(
        1 + monthlyRate, -terms)));

    // Build the return string for the display of the amort table
    $("#loanAmountResult").text(replaceNumberWithCommas(balance.toFixed(2)));
    $("#annualInterestRate").text((interestRate * 100).toFixed(2));
    $("#lengthOfMortgage").text(terms / 12 + " years (" + terms + " months)");
    $("#monthlyRepayment").text(replaceNumberWithCommas(payment.toFixed(2)));


    // Add header row
    var result = "<div class=\"table-responsive\"><table class=\"table table-bordered table-striped table-hover table-sm\"><tr align=center><th>Month #</th><th>Starting Balance</th>" +
        "<th>Interest</th><th>Principal</th><th>Equity</th>";

    // Initiate Var
    var totalAmountPaid = 0;
    var totalInterestPaid = 0;
    var equityBuilt = 0;
    /*
      Loop that calculates the monthly Loan amortization amounts then adds them to the return string 
     */
    for (var count = 0; count < terms; ++count) {
        var interest = 0;
        var monthlyPrincipal = 0;

        // Start a new table row on each loop iteration
        result += "<tr align=center>";

        // Disp;ay the month number in col 1
        result += "<td>" + (count + 1) + "</td>";

        // Display in-loop balance
        result += "<td>" + replaceNumberWithCommas(balance.toFixed(2)) + "</td>";

        // Calculate the in-loop interest amount and display
        interest = balance * monthlyRate;
        result += "<td>" + replaceNumberWithCommas(interest.toFixed(2)) + "</td>";

        // Calculate the in-loop monthly principal and display
        monthlyPrincipal = payment - interest;
        result += "<td>" + replaceNumberWithCommas(monthlyPrincipal.toFixed(2)) + "</td>";

        // End the table row on each iteration of the loop	
        equityBuilt = equityBuilt + monthlyPrincipal
        result += "<td>" + replaceNumberWithCommas((equityBuilt).toFixed(2)) + "</td>";


        result += "</tr>";

        // Update the balance for each loop iteration
        balance = balance - monthlyPrincipal;
        totalAmountPaid = totalAmountPaid + monthlyPrincipal + interest;
        totalInterestPaid = totalInterestPaid + interest;
    }

    // Close the table
    result += "</table></div>";

    $("#totalAmountPaid").text(replaceNumberWithCommas(totalAmountPaid.toFixed(2)));
    $("#totalInterestPaid").text(replaceNumberWithCommas(totalInterestPaid.toFixed(2)));

    return result;
}