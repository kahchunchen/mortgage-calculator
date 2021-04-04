$(document).ready(function () {
    $("#confirmEmailAddressDiv").hide();
    $("#registerButton").prop("disabled", true);
});

$("#emailAddress, #confirmEmailAddress").keyup(function () {
    if ($("#emailAddress").val().indexOf('.') > -1) {
        $("#confirmEmailAddressDiv").show();
    };

    if ($("#emailAddress").val() != $('#confirmEmailAddress').val()) {
        $("#confirmEmailAddress").addClass("is-invalid");
        $("#emailMatchMessage").show();
        $("#registerButton").prop("disabled", true);
    } else {
        $("#confirmEmailAddress").removeClass("is-invalid");
        $("#emailMatchMessage").hide();
        $("#registerButton").prop("disabled", false);
    };
});