


(() => {
    const   favThingsButtons = document.querySelector("#favThingsButtons"),
            theFavButtonTemplate = document.querySelector("#favThingsButtonTemplate").content;

    let favourteItems = [];

    // The FETCH Function and get my Fav Things DATA
    function getFavData() {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {
                // save to get it later
                favourteItems = data;

                buildFavThings(data);
            })
        .catch(error => {
            console.error(error);
        });
    }

    function buildFavThings(info) {

        const favouriteNames = Object.keys(info);

        updateText(info[favouriteNames[0]])

        // this adds all the thumbnails at the bottom of the screen
        favouriteNames.forEach(favorite => {
            let panel = theFavButtonTemplate.cloneNode(true);
            let section = panel.children;

            section[0].dataset.name = favorite

            // adds an image
            section[0].querySelector("img").src = `images/${info[favorite].favpic}`;

            favThingsButtons.appendChild(panel);
        });

        // Goes through each button and adds a 'click' event
        let buttons = document.querySelectorAll(".favourite_button");
        buttons.forEach(button => {
            button.addEventListener('click', clickFavourite)
        });
    }

    // this 'click' function gets the name and then changes
    function clickFavourite(event) {
        const favorite = event.currentTarget.dataset.name;
        updateText(favourteItems[favorite])
    }

    // this function adds the content 
    function updateText(data) {
        const landingBox = document.querySelector("#favThings");
        let section = landingBox.children;
        // this adds the image
        // first div which are the images 
        section[1].querySelector("img").src = `images/${data.favpic}`;

        // this gets the second div children which is the text
        let text = section[0].children
        // this updates the text
        text[0].textContent = data.name;
        text[1].textContent = data.heading;
        text[2].textContent = data.description;
    }

    getFavData();
})();