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
        "ITS FINALLY YOUR BIRTHDAY,HAPPY BIRTHDAY MY LOVELY ANGEL!!",

    "002":
        "You mentioned the unsent project one time so I tried making smth similar and personal for my love,hope you like it",

    "003":
        "All of these messages are just for my love and they come from the deepest depths of my heart",

    "004":
        "You're the most sweetest and kindest person I've ever met in my life",
       
    "005":
        "You're sunshine,warmth and love personified all in one person,",

    "006":
        "You've got more of my heart than I do,even all of it",

    "007":
        "I could spend all the time in this world with you and I'll still want to have more time with you",

    "008":
        "You're so lovable, loving you is as natural for me as breathing is,I could live without most things but living without loving you would be impossible",

    "009":
        "There's nothing in this world that I genuinely want more than to be there with you irl, I'd give up everything I hold dear for even a day with you irl",

    "010":
        "I'd love to spoil you with every chance I get,I wish I could do so much more for you each day I find more and more things I want to do for you",

    "011":
        "My love you're my heart,my being, your happiness is my happiness, your worries are my worries,your problems are my problems,Everything I am is for you",

   "012":
        "I want to keep hearing every small detail about you,every single ones no matter small or big,I want to know everything about you",

    "013":
        "My love everything reminds me of you,from the flowers I see as I walk by,the sun as it shines bright,the air as it breezes,the sky as it stands vast and beautiful",

    "014":
        "You're as gorgeous as the moon captivating everyone's attention, as a field of the most beautiful flowers,You're as graceful as a swan,as cute as kittens,as sweet as candy,as gentle as cotton,as smart as Einstein,as strong as Madoka and I love you so much",

    "015":
        "You'll NEVER EVER be too much for me, In fact I want way more of you in every possible way, I NEEED MORE OF YOU",

    "016":
        "I'm really really bad with birthdays, yours were the only I was sure of and was looking forward to ALL THIS TIME",

    "017":
        "No matter what I do,how swamped I am,how overwhelmed I may be, my love one word from you and I'll come running to your side, I'm only busy for everyone else, I'm always free for you",

    "018":
        "I could be surrounded by ppl,having blast of a time but I'd still find myself checking for your messages because nothing will ever be as fun as just talking with you even about the most randomest things ever",

    "020":
        "An hour sounds short until its an hour without you and suddenly it feels like an eternity,every mins feels like hours away from you",

    "021":
        "My love for you knows no bounds, I could change every fibre of my being for you, forget hate if you dislike or are annoyed at smth about me INSTANLY GONE if its smth I like? DOES NOT MATTER",

   "022":
        "I want to talk to you forever,comfort you forever,protect you forever,be there for you forever,love you forever I just want you forver",

   "023":
        "GAHH I'M SO JEALOUS OF YOUR KITTIES WHO GET TO SEE YOU ALL THE TIME, THEY'RE LIVING MY DREAM DHASB CJAKN",

   "024":
        "You're genuinely a wish,treasure,miracle blessing all in once. Being able to talk like someone as amazing,loving and sweet like you makes me the luckiest person ever",

   "025":
        "I love all the inside jokes we have,and I love it so much more because only both of us knows it's like our own world",

   "026":
        "One life is not enough to love you,I hope I find you in every life,in every universe and I pray we're close in all of those lives and universes",

   "027":
        "Whenever I see any pair of characters,animals or anything I always associate them with us in any shape INSTANTLY, YOU'RE ALWAYS ON MY MIND",

   "028":
       "Your voice is so sweet and just really pleasant calming to hear I love all of the vms you send AND I LOVE THE THIS REMINDS ME VMS ABSHCA",

   "029":
        "I could sacrifice everything for you but it'll still feel like I didn't lose anything as long as I have you",

   "030":
       "I already won the biggest jackpot of my life meeting you, you are my everything everyone all at once",

   "031":
       "My love I want to give you the whole world,you'll always be my priority no matter what happens, my love for you and how I feel about you will never ever change. Until my dying breath,until the Sun explodes, the Earth ceases to exist,until time stops I'll always love you, I'll always be on your side,I'll always trust you with my life,I'll always be there for you,I'll always protect you from anything and everything,I'll always be a warm and comfortable space for you,I'll always come running to you,I'll always choose you in a room filled with everyone I know,I'll always spoil you,I'll always buy you things with what little money I have,I'll always celebrate your wins and comfort you for your losses, I'll be there when you're up high or when you're down low, I'll always love every single part and version of you,I'll be there when you want to talk a lot or when you don't feel like talking,I'll never ever judge you for anything, I'll be there to help you for anything, if its smth I can't help with then I'll learn,I'll be there with every step no matter which step you take, I'll be there to help you through your high school life, I'll always be there for everything and everytime you need me",

   "032":
       "My angel as long as I'm around you will never ever feel alone, you can come to me for absolutely anything,I don't believe in gods but you are ♡my god♡"
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
   💗 HEARTS WHEN NOTE OPENS
========================================= */

function createNoteHearts() {

    const symbols = [
        "♡",
        "♥",
        "♡",
        "✦",
        "♥",
        "♡"
    ];


    const card =
        document.querySelector(
            ".message-card"
        );


    const rect =
        card.getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "note-heart";


        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.left =
            centerX + "px";


        heart.style.top =
            centerY + "px";


        heart.style.fontSize =
            (
                16 +
                Math.random() * 18
            ) + "px";


        heart.style.setProperty(
            "--heart-x",
            (
                Math.random() * 300 -
                150
            ) + "px"
        );


        heart.style.setProperty(
            "--heart-y",
            (
                Math.random() * 260 -
                130
            ) + "px"
        );


        heart.style.setProperty(
            "--heart-rotation",
            (
                Math.random() * 180 -
                90
            ) + "deg"
        );


        document.body.appendChild(
            heart
        );


        setTimeout(function() {

            heart.remove();

        }, 1900);

    }
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
   ✨ BUTTON PARTICLES
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
            document.createElement(
                "span"
            );


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


        setTimeout(function() {

            particle.remove();

        }, 1400);

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
