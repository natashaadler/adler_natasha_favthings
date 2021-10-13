//import files go on top


//add reg code here
(() => {
    const   theTeam = document.querySelector("#teamSection"),
            theTemplate = document.querySelector("#bio-template").content;

    // set up a Fetch function and get some data
    function getData() {
        // retrieve our data object
        fetch("./data.json") // go and get the data (fetch boy!)
            .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
            .then(data => {
                console.log(data);

                buildTeam(data);
            })
        .catch(error => console.error(error));
    }

    function buildTeam(info) {

        // grab the keys from the data object (the names)
        const people = Object.keys(info);

        people.forEach(person => {
            let panel = theTemplate.cloneNode(true); // make a copy of the template content
            let containers = panel.firstElementChild.children; // get a reference to the template content

            // cycle through the child elements inside the <section> tag in the <template> tag
            // and update their attributes 
            
            // add the image
            containers[0].querySelector("img").src = `images/${info[person].biopic}`;

            // update the text
            containers[1].textContent = info[person].name;
            containers[2].textContent = info[person].role;
            containers[3].textContent = info[person].nickname;

            theTeam.appendChild(panel);
        });

    }

    getData();
})();