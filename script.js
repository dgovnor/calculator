window.onload = function() {
  let screen, limit, zero, operator, output;

  screen = document.getElementById("disPlay");
  let elem = document.querySelectorAll(".number");
  let len = elem.length;
  for (let i = 0; i < len; i++) {
    elem[i].addEventListener(
      "click",
      function() {
        num = this.value;
        if (screen.innerHTML === "0") screen.innerHTML = "";
        output = screen.innerHTML += num;
        limit = output.length;
        if (limit > 16) {
          alert("Sorry you cant add any other number");
        }
      },
      false
    );
  }
  document.querySelector(".zero").addEventListener(
    "click",
    function() {
      zero = this.value;
      if (screen.innerHTML !== "") {
        output = screen.innerHTML = zero;
      } else if (screen.innerHTML === output) {
        output = screen.innerHTML += zero;
      }
    },
    false
  );
  document.querySelector(".period").addEventListener(
    "click",
    function() {
      period = this.value;
      if (screen.innerHTML === "0") {
        output = screen.innerHTML = screen.innerHTML.concat(".");
      } else if (screen.innerHTML === output) {
        screen.innerHTML = screen.innerHTML.concat(".");
      }
    },
    false
  );
  document.querySelector(".equals").addEventListener(
    "click",
    function() {
      if (screen.innerHTML === output) {
        screen.innerHTML = eval(output);
      } else {
        screen.innerHTML = "";
      }
    },
    false
  );
  document.querySelector("#delete").addEventListener(
    "click",
    function() {
      screen.innerHTML = "0";
    },
    false
  );
  let elem1 = document.querySelectorAll(".operator");
  let len1 = elem1.length;
  for (let i = 0; i < len1; i++) {
    elem1[i].addEventListener(
      "click",
      function() {
        operator = this.value;
        if (screen.innerHTML === "") {
          screen.innerHTML = screen.innerHTML.concat("");
        } else if (output) {
          screen.innerHTML = output.concat(operator);
        }
      },
      false
    );
  }
};
