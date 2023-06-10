function updateRate() {
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').textContent = rateval + '%';
  }

  function compute() {
    var principalInput = document.getElementById('principal');
    var principal = parseInt(principalInput.value);
    if (principal <= 0) {
      alert("Enter a positive number");
      principalInput.value = "";
      principalInput.focus();
      return;
    } else {
    var rate = parseFloat(document.getElementById('rate').value);
    var years = parseInt(document.getElementById('years').value);
    var currentYear = new Date().getFullYear();
      var futureYear = currentYear + years;
      var interest = (principal * years * rate) / 100;
      var amount = principal + interest;

      var result = document.getElementById('result');

     
      result.innerHTML =
        "if you deposit <mark>" +
        principal +
        "</mark>,<br>at an interest rate of <mark>" +
        rate +
        "%</mark>.<br>You will receive an amount of <mark>" +
        amount +
        "</mark>,<br>in the year <mark>" +
        futureYear +
        "</mark>.";
    }
  }