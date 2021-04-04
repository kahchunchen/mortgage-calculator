<?php
include 'top.php';
?>

<main role="main" class="container">

    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-6">
                <h3>Details</h3>
                <form action="" method="POST">
                    <div class="form-group">
                        <label for="">Loan Amount</label>
                        <input type="text" id="loanAmount" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Length of Mortgage (Year)</label>
                        <input type="text" id="terms" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Annual Interest Rate (%)</label>
                        <input type="text" id="interest" class="form-control">
                    </div>
                    <small class="text-danger">Fill in table to see the results.</small>
                </form>
            </div>
            <div class="col-12 col-sm-6" id="resultDiv">
                <h3>Result</h3>
                <table class="table table-borderless">
                    <tr>
                        <td>Total Loan Amount</td>
                        <td><span id="loanAmountResult"></span></td>
                    </tr>
                    <tr>
                        <td>Annual Interest Rate</td>
                        <td><span id="annualInterestRate"></span></td>
                    </tr>
                    <tr>
                        <td>Length of Mortgage</td>
                        <td><span id="lengthOfMortgage"></span></td>
                    </tr>
                    <tr>
                        <td>Monthly Repayment</td>
                        <td><span id="monthlyRepayment"></span></td>
                    </tr>
                    <tr>
                        <td>Total Payment</td>
                        <td><span id="totalAmountPaid"></span></td>
                    </tr>
                    <tr>
                        <td>Total Interest Paid</td>
                        <td><span id="totalInterestPaid"></span></td>
                    </tr>
                </table>

            </div>
            <div class="col-12" id="amortizationDiv">
                <h3>Amortization Table</h3>
                <div id="Result"></div>
            </div>

        </div>
    </div>

</main>

<script src="assets/js/input-validation.js"></script>
<script src="assets/js/mortgage-calculator.js"></script>

<?php include 'bottom.php'; ?>