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

        nameScreen.classList.remove("active");


        setTimeout(function() {

            nameScreen.style.display = "none";

            numberScreen.style.display = "flex";

            numberScreen.classList.add("active");

        }, 400);


    } else {

        nameError.textContent =
            "Hmm... I don't think you're supposed to be here ♡";

        nameInput.value = "";

        nameInput.focus();

    }
}


/* =========================================
   MESSAGES
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


    /* Convert 1 → 001 */

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


            /*
                Wait a tiny moment so the
                envelope appears first.
            */

            setTimeout(function() {

                const envelope =
                    document.querySelector(
                        ".envelope"
                    );


                /*
                    Make sure it starts closed.
                */

                envelope.classList.remove(
                    "open"
                );


                /*
                    Then open it.
                */

                setTimeout(function() {

                    envelope.classList.add(
                        "open"
                    );


                    /*
                        Hearts + sparkles
                    */

                    createEnvelopeParticles(
                        envelope
                    );


                    /*
                        Start typing after
                        the envelope opens.
                    */

                    setTimeout(function() {

                        typeMessage(
                            messages[number]
                        );

                    }, 650);


                }, 200);


            }, 100);


        }, 400);


    } else {

        numberError.textContent =
            "I don't think there's anything here... try another number ♡";

    }
}


/* =========================================
   ✍️ TYPEWRITER
========================================= */

function typeMessage(message) {

    let index = 0;

    messageText.textContent = "";


    const typingSpeed = 45;


    const typing =
        setInterval(function() {

            messageText.textContent +=
                message.charAt(index);

            index++;


            if (
                index >= message.length
            ) {

                clearInterval(typing);

            }

        }, typingSpeed);
}


/* =========================================
   ← BACK BUTTON
========================================= */

const backButton =
    document.getElementById("back-button");


backButton.addEventListener(
    "click",
    function() {

        messageScreen.classList.remove(
            "active"
        );


        setTimeout(function() {

            messageScreen.style.display =
                "none";


            numberScreen.style.display =
                "flex";


            numberScreen.classList.add(
                "active"
            );


            numberInput.value = "";

            numberInput.focus();


        }, 400);

    }
);


/* =========================================
   ✨ CLICK PARTICLES
========================================= */

function createParticles(button) {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧",
        "˚",
        "⋆"
    ];


    const rect =
        button.getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.position =
            "fixed";


        particle.style.left =
            centerX + "px";


        particle.style.top =
            centerY + "px";


        particle.style.pointerEvents =
            "none";


        particle.style.zIndex =
            "99999";


        particle.style.color =
            Math.random() > 0.5
                ? "#d87599"
                : "#e9a6bd";


        particle.style.fontSize =
            (
                14 +
                Math.random() * 14
            ) + "px";


        particle.style.fontFamily =
            "Caveat, cursive";


        document.body.appendChild(
            particle
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            70 +
            Math.random() * 100;


        const endX =
            Math.cos(angle) *
            distance;


        const endY =
            Math.sin(angle) *
            distance;


        particle.animate(

            [

                {
                    transform:
                        "translate(-50%, -50%) scale(0.4)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${endX}px),
                            calc(-50% + ${endY}px)
                        )
                        scale(1.3)
                        rotate(
                            ${Math.random() * 180 - 90}deg
                        )`,

                    opacity: 0
                }

            ],

            {

                duration:
                    900 +
                    Math.random() * 400,

                easing: "ease-out"

            }

        );


        setTimeout(
            function() {

                particle.remove();

            },
            1400
        );

    }
}


/* =========================================
   BUTTON PARTICLES
========================================= */

enterButton.addEventListener(
    "click",
    function() {

        createParticles(this);

    }
);


openButton.addEventListener(
    "click",
    function() {

        createParticles(this);

    }
);


/* =========================================
   💌 ENVELOPE PARTICLES
========================================= */

function createEnvelopeParticles(
    envelope
) {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧",
        "˚",
        "⋆"
    ];


    const rect =
        envelope.getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    for (
        let i = 0;
        i < 22;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "envelope-particle";


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            centerX + "px";


        particle.style.top =
            centerY + "px";


        particle.style.fontSize =
            (
                16 +
                Math.random() * 16
            ) + "px";


        particle.style.setProperty(
            "--x",
            (
                Math.random() * 220 -
                110
            ) + "px"
        );


        particle.style.setProperty(
            "--y",
            (
                Math.random() * 180 -
                100
            ) + "px"
        );


        particle.style.setProperty(
            "--rotation",
            (
                Math.random() * 180 -
                90
            ) + "deg"
        );


        document.body.appendChild(
            particle
        );


        setTimeout(
            function() {

                particle.remove();

            },
            1500
        );

    }
}


