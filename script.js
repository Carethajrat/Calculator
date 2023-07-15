// when the DOM is ready as in Loaded
$(document).ready(function () {
  // assign Values in here
  // Setting up our Operands in here
  $("#zero").on("click", function () {
    /* if the value is zero do not aad*/
    if ($("#input-box").val() == "0") {
      $("#input-box").val("0");
    } /* if the value is zero append*/ else {
      $("#input-box").val($("#input-box").val() + "0");
    }
  });

  $("#one").on("click", function () {
    /* if the value is zero overwrite*/
    if ($("#input-box").val() == "0") {
      $("#input-box").val("1");
    } /* if the value is zero append*/ else {
      $("#input-box").val($("#input-box").val() + "1");
    }
  });
  $("#two").on("click", function () {
    /* if the value is zero overwrite*/
    if ($("#input-box").val() == "0") {
      $("#input-box").val("2");
    } /* if the value is zero append*/ else {
      $("#input-box").val($("#input-box").val() + "2");
    }
  });
  $("#three").on("click", function () {
    /* if the value is zero overwrite*/
    if ($("#input-box").val() == "0") {
      $("#input-box").val("3");
    } /* if the value is zero append*/ else {
      $("#input-box").val($("#input-box").val() + "3");
    }
  });
  $("#four").on("click", function () {
    /* if the value is zero overwrite*/
    if ($("#input-box").val() == "0") {
      $("#input-box").val("4");
    } /* if the value is zero append*/ else {
      $("#input-box").val($("#input-box").val() + "4");
    }
  });
  $("#five").on("click", function () {
    /* if the value is zero overwrite*/
    if ($("#input-box").val() == "0") {
      $("#input-box").val("5");
    } /* if the value is zero append*/ else {
      $("#input-box").val($("#input-box").val() + "5");
    }
  });
  $("#six").on("click", function () {
    /* if the value is zero overwrite*/
    if ($("#input-box").val() == "0") {
      $("#input-box").val("6");
    } /* if the value is zero append*/ else {
      $("#input-box").val($("#input-box").val() + "6");
    }
  });
  $("#seven").on("click", function () {
    /* if the value is zero overwrite*/
    if ($("#input-box").val() == "0") {
      $("#input-box").val("7");
    } /* if the value is zero append*/ else {
      $("#input-box").val($("#input-box").val() + "7");
    }
  });
  $("#eight").on("click", function () {
    /* if the value is zero overwrite*/
    if ($("#input-box").val() == "0") {
      $("#input-box").val("8");
    } /* if the value is zero append*/ else {
      $("#input-box").val($("#input-box").val() + "8");
    }
  });
  $("#nine").on("click", function () {
    /* if the value is zero overwrite*/
    if ($("#input-box").val() == "0") {
      $("#input-box").val("9");
    } /* if the value is zero append*/ else {
      $("#input-box").val($("#input-box").val() + "9");
    }
  });
  $("#dot").on("click", function () {
    $("#input-box").val($("#input-box").val() + ".");
  });
 // Pre-Defined value of pi for ease of use
 $("#pi").on("click", function () {
  $("#input-box").val(Math.PI);
 
 });
  // on click for operations
  /*Adding First storing first value in first box and then
   resetting it to 0 and then will get the second number plus setting a function key */
  //  Addition in here
  $("#add").on("click", function () {
    $("#first-box").val($("#input-box").val());
    $("#function-box").val("+");
    $("#input-box").val("0");
  });
  // Subtraction in here
  $("#sub").on("click", function () {
    $("#first-box").val($("#input-box").val());
    $("#function-box").val("-");
    $("#input-box").val("0");
  });
  // Multiplication in here
  $("#mul").on("click", function () {
    $("#first-box").val($("#input-box").val());
    $("#function-box").val("*");
    $("#input-box").val("0");
  });
  // Division in here
  $("#div").on("click", function () {
    $("#first-box").val($("#input-box").val());
    $("#function-box").val("/");
    $("#input-box").val("0");
  });
// Power of the number
  $("#square").on("click", function () {
    $("#first-box").val($("#input-box").val());
    result = parseFloat($("#first-box").val()) * parseFloat($("#first-box").val());
    $("#input-box").val(result);
    $("#function-box").val("square");
    $("#history-box").val(
      $("#first-box").val() +
        "\t" +
        $("#function-box").val() +
        "\t" +
        $("#second-box").val() +
        "\t=\t" +
        result +
        "\n\n" +
        $("#history-box").val()
    );
    localStorage.setItem("history", $("#history-box").val());
  });
  // Square root function using Math.sqrt() method
  $("#square-root").on("click", function () {
    $("#first-box").val($("#input-box").val());
    result = Math.sqrt(parseFloat($("#first-box").val()));
    $("#input-box").val(result);
    $("#function-box").val("square-root");
    $("#history-box").val(
      $("#first-box").val() +
        "\t" +
        $("#function-box").val() +
        "\t" +
        $("#second-box").val() +
        "\t=\t" +
        result +
        "\n\n" +
        $("#history-box").val()
    );
    localStorage.setItem("history", $("#history-box").val());
  });
 

/* in here based on a function key we will operate on the operands 
 which are values of first-box and second-box */
  $("#equals-to").on("click", function () {
    $("#second-box").val($("#input-box").val());
    var result;
    if ($("#function-box").val() == "+") {
      result =
        parseFloat($("#first-box").val()) + parseFloat($("#second-box").val());
    }
    if ($("#function-box").val() == "-") {
      result =
        parseFloat($("#first-box").val()) - parseFloat($("#second-box").val());
    }
    if ($("#function-box").val() == "*") {
      result =
        parseFloat($("#first-box").val()) * parseFloat($("#second-box").val());
      $("#third-box").val(result);
      console.log(`${$("#third-box").val()}`);
    }
    if ($("#function-box").val() == "/") {
      result =
        parseFloat($("#first-box").val()) / parseFloat($("#second-box").val());
    }
    if ($("#function-box").val() == "square") {
      result =
        parseFloat($("#first-box").val()) * parseFloat($("#first-box").val());
    }
    if ($("#function-box").val() == "square-root") {
      result =
        parseFloat($("#first-box").val()) * parseFloat($("#first-box").val());
    }

    $("#input-box").val(result);
    // Saving in our history using Local storage
    $("#history-box").val(
      $("#first-box").val() +
        "\t" +
        $("#function-box").val() +
        "\t" +
        $("#second-box").val() +
        "\t=\t" +
        result +
        "\n\n" +
        $("#history-box").val()
    );
    localStorage.setItem("history", $("#history-box").val());
  });
  // Clearing our input box in here
  $("#clear").on("click", function () {
    $("#input-box").val("0");
  });

});
