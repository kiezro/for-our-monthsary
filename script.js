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
// PHOTO FLIP
// ===============================

function flipCard(card) {

    // Only the photo in the center can flip
    if (card.classList.contains("active")) {

        card.classList.toggle("flipped");

    }

}


// ===============================
// PHOTO NAVIGATION
// ===============================

let currentPhoto = 2;

const photos = document.querySelectorAll(".photo-card");


function updateCenterPhoto() {

    photos.forEach((photo, index) => {

        // Make the current photo active
        if (index === currentPhoto) {

            photo.classList.add("active");

        } else {

            photo.classList.remove("active");

        }

        // Reset flip
        photo.classList.remove("flipped");

    });


    // Update counter
    document.getElementById("counter").textContent =
        (currentPhoto + 1) + " / " + photos.length;

}


// ===============================
// NEXT PHOTO
// ===============================

function nextPhoto() {

    currentPhoto++;

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

    if (currentPhoto < 0) {

        currentPhoto = photos.length - 1;

    }

    updateCenterPhoto();

}


// Set Photo 3 as the starting center photo
updateCenterPhoto();
