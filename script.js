```javascript
/* =========================================
   NAME SCREEN
========================================= */

const nameInput =
    document.getElementById("name-input");

const enterButton =
    document.getElementById("enter-button");

const nameError =
    document.getElementById("name-error");

const nameScreen =
    document.getElementById("name-screen");

const numberScreen =
    document.getElementById("number-screen");


enterButton.addEventListener(
    "click",
    checkName
);


nameInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            checkName();
        }

    }
);


function checkName() {

    const enteredName =
        nameInput.value
            .trim()
            .toLowerCase();


    if (
        enteredName === "yai" ||
        enteredName === "yasmine"
    ) {

        nameError.textContent = "";

        nameScreen.classList.remove(
            "active"
        );


        setTimeout(function() {

            nameScreen.style.display =
                "none";

            numberScreen.style.display =
                "flex";

            numberScreen.classList.add(
                "active"
            );

        }, 400);


    } else {

        nameError.textContent =
            "Hmm... I don't think you're supposed to be here ♡";

        nameInput.value = "";

        nameInput.focus();

    }
}


/* =========================================
   💌 MESSAGES
========================================= */

const messages = {

    "001":
        "Your first message goes here...",

    "002":
        "Your second message goes here...",

    "003":
        "Your third message goes here...",

    "143":
        "I love you ♡"

};


/* =========================================
   NUMBER SCREEN
========================================= */

const numberInput =
    document.getElementById("number-input");

const openButton =
    document.getElementById("open-button");

const numberError =
    document.getElementById("number-error");

const messageScreen =
    document.getElementById("message-screen");

const messageText =
    document.getElementById("message-text");

const messageNumber =
    document.querySelector(".message-number");


openButton.addEventListener(
    "click",
    openMessage
);


numberInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            openMessage();
        }

    }
);


/* =========================================
   💌 OPEN MESSAGE
========================================= */

function openMessage() {

    let number =
        numberInput.value.trim();


    /* Allows 1 to become 001 */

    if (/^\d+$/.test(number)) {

        number =
            number.padStart(3, "0");

    }


    if (messages[number]) {

        numberError.textContent = "";

        messageNumber.textContent =
            number;

        messageText.textContent = "";


        numberScreen.classList.remove(
            "active"
        );


        setTimeout(function() {

            numberScreen.style.display =
                "none";


            messageScreen.style.display =
                "flex";


            messageScreen.classList.add(
                "active"
            );


            /* Wait for note animation */

            setTimeout(function() {

                createNoteHearts();

                typeMessage(
                    messages[number]
                );

            }, 450);


        }, 400);


    } else {

        numberError.textContent =
            "I don't think there's anything here... try another number ♡";

    }
}


/* =================================*
```
