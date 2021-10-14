//import files go on top


(() => {
    const   myFavThings = document.querySelector("#favThings"),
            theFavTemplate = document.querySelector("#favThingsTemplate").content;

    // Fetch function and get my fav things data
    function getFavData() {
        fetch("./data.json")
            .then(res => res.json()) 
            .then(data => {
                console.log(data);

                buildFavThings(data);
            })
        .catch(error => console.error(error));
    }

    function buildFavThings(info) {

        const people = Object.keys(info);

        people.forEach(favorite => {
            let panel = theFavTemplate.cloneNode(true); 
            let section = panel.firstElementChild.children; 
            
            // add image
            section[0].querySelector("img").src = `images/${info[favorite].favpic}`;

            // update the text
            section[1].textContent = info[favorite].name;
            section[2].textContent = info[favorite].heading;
            section[3].textContent = info[favorite].description;
            

            myFavThings.appendChild(panel);
        });

    }

    getFavData();
})();