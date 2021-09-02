$("#sms-btn").click(function (e) {
  document.getElementById("sms-fill").classList.add("d-none");
  document.getElementById("sms-fail").classList.add("d-none");
  document.getElementById("sms-success").classList.add("d-none");
  document.getElementById("sms-btn").disabled = true;

  e.preventdefault;
  if ($("#sms-form")[0].checkValidity()) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phno = document.getElementById("phno").value;
    var sub = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var text =
      "Name : " +
      name +
      " Email : " +
      email +
      " Mobile Number : " +
      phno +
      " Subject : " +
      sub +
      " Message : " +
      message;

    $.ajax({
      type: "POST",
      url: "assets/php/message.php",
      datatype: "html",
      data: {
        text: text,
      },
      success: function (response) {
        var parsedResponse = JSON.parse(response);
        console.log(parsedResponse);
        if (parsedResponse == "success") {
          document.getElementById("sms-success").classList.remove("d-none");
          document.getElementById("sms-btn").disabled = false;
        } else {
          document.getElementById("sms-fail").classList.remove("d-none");
          document.getElementById("sms-btn").disabled = false;
        }
      },

      error: function (error) {},
    });
  } else {
    document.getElementById("sms-fill").classList.remove("d-none");
    document.getElementById("sms-btn").disabled = false;
  }
});
