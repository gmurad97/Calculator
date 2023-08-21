const NUMBER_BUTTONS = document.querySelectorAll("[class*='number']:not([class*='dot'])");
const DISPLAY_RESULT = document.querySelector(".calc-result__display");
const CLEAR_BTN = document.querySelector("#clear");
const PLUS_MINUS_BTN = document.querySelector("#plus_minus");
const PERCENT_BTN = document.querySelector("#percent");
const DIVIDER_BTN = document.querySelector("#divider");
const MULTIPLICATION_BTN = document.querySelector("#multiplication");
const MINUS_BTN = document.querySelector("#minus");
const PLUS_BTN = document.querySelector("#plus");
const RESULT_BTN = document.querySelector("#result");
const DOT_BTN = document.querySelector(".calc-control__number--dot");

NUMBER_BUTTONS.forEach((elemBtn) => {
    elemBtn.addEventListener("click", () => {
        if (DISPLAY_RESULT.innerHTML === "0") {
            DISPLAY_RESULT.innerHTML = elemBtn.innerHTML;
        }
        else {
            DISPLAY_RESULT.innerHTML += elemBtn.innerHTML;
        }
    });
});

CLEAR_BTN.addEventListener("click", () => {
    DISPLAY_RESULT.innerHTML = "0";
});

PLUS_MINUS_BTN.addEventListener("click", () => {
    DISPLAY_RESULT.innerHTML += "*(-1)";
});

PERCENT_BTN.addEventListener("click", () => {
    DISPLAY_RESULT.innerHTML += "%";
});

DIVIDER_BTN.addEventListener("click", () => {
    DISPLAY_RESULT.innerHTML += "/";
});

MULTIPLICATION_BTN.addEventListener("click", () => {
    DISPLAY_RESULT.innerHTML += "*";
});

MINUS_BTN.addEventListener("click", () => {
    DISPLAY_RESULT.innerHTML += "-";
});

PLUS_BTN.addEventListener("click", () => {
    DISPLAY_RESULT.innerHTML += "+";
});

DOT_BTN.addEventListener("click", () => {
    DISPLAY_RESULT.innerHTML += ".";
});

RESULT_BTN.addEventListener("click", () => {
    try {
        let evalExp = eval(DISPLAY_RESULT.innerHTML);
        if (evalExp == Number.POSITIVE_INFINITY || evalExp == Number.NEGATIVE_INFINITY) {
            DISPLAY_RESULT.innerHTML = "Error!";
        }
        else {
            DISPLAY_RESULT.innerHTML = parseFloat(evalExp);
        }
    }
    catch {
        DISPLAY_RESULT.innerHTML = "Error!";
    }
});