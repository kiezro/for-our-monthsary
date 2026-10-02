// ===============================
// MONTHSARY MESSAGE
// ===============================

function showMessage() {

    alert(
        "Happy Monthsary, My Love! ❤️\n\n" +
        "Thank you for another beautiful month together. " +
        "I may not always say it perfectly, but I truly appreciate " +
        "every moment we share.\n\n" +
        "Here's to more memories, more laughs, and more months together. 💗"
    );

}


// ===============================
// PHOTO SETTINGS
// ===============================

// Photo 3 starts in the center
let currentPhoto = 2;

// Get all photo cards
const photos = document.querySelectorAll(".photo-card");


// ===============================
// PHOTO FLIP
// ===============================

function flipCard(card) {

    // Only the center photo can flip
    if (card.classList.contains("active")) {

        card.classList.toggle("flipped");

    }

}


// ===============================
// UPDATE PHOTO POSITIONS
// ===============================

function updateCenterPhoto() {

    photos.forEach((photo, index) => {

        // Remove old position classes
        photo.classList.remove(
            "active",
            "left",
            "left-far",
            "right",
            "right-far",
            "flipped"
        );


        // Calculate position
        let position = index - currentPhoto;


        // Make the photos loop around
        if (position > 2) {

            position -= photos.length;

        }


        if (position < -2) {

            position += photos.length;

        }


        // =========================
        // CENTER
        // =========================

        if (position === 0) {

            photo.classList.add("active");

        }


        // =========================
        // LEFT
        // =========================

        else if (position === -1) {

            photo.classList.add("left");

        }


        // =========================
        // FAR LEFT
        // =========================

        else if (position === -2) {

            photo.classList.add("left-far");

        }


        // =========================
        // RIGHT
        // =========================

        else if (position === 1) {

            photo.classList.add("right");

        }


        // =========================
        // FAR RIGHT
        // =========================

        else if (position === 2) {

            photo.classList.add("right-far");

        }

    });


    // Update photo counter

    document.getElementById("counter").textContent =
        (currentPhoto + 1) + " / " + photos.length;

}


// ===============================
// NEXT PHOTO
// ===============================

function nextPhoto() {

    currentPhoto++;

    // Go back to Photo 1
    // after Photo 5

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    updateCenterPhoto();

}


// ===============================
// PREVIOUS PHOTO
// ===============================

function previousPhoto() {

    currentPhoto--;

    // Go to Photo 5
    // when going before Photo 1

    if (currentPhoto < 0) {

        currentPhoto = photos.length - 1;

    }

    updateCenterPhoto();

}


// ===============================
// START GALLERY
// ===============================

updateCenterPhoto();
