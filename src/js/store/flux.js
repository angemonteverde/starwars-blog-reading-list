const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
            selectPlanet: [],
			favorites: [],
			people: [],
			selectPeople: [],
            selectShip: [],
            ships: [],
            shipImage: ""
            
		},
		actions: {
			// Use getActions to call a function within a fuction
            setShipImage: (url) => {setStore({shipImage: url})},
			exampleFunction: () => { getActions().changeColor(0, "green"); },
			loadSomeData: () => { /** fetch().then().then(data => setStore({ "foo": data.bar })) */ },
            getPlanet: (planet) => { setStore({ selectPlanet: planet, }); },
			getPlanets: async () => {
                const store = getStore();
                if (localStorage.getItem("planets") === null) {
                    const response = await fetch(`https://swapi.dev/api/planets`, {
                        method: "GET",
                        ContentType: "application/json",
                    });
                    const responseJSON = await response.json();

                    setStore({ planets: responseJSON.results, });

                    localStorage.setItem(`planets`, JSON.stringify(store.planets));
                    let storage = localStorage.getItem("planets");
                } else {
                    setStore({ planets: JSON.parse(localStorage.getItem("planets")), });
                }
            },
			getChar: (Char) => { setStore({ selectPeople: Char, }); },
            getPeople: async () => {
				
				const store = getStore()
				if (localStorage.getItem("people") === null) {
                    const response = await fetch(`https://swapi.dev/api/people`, {
                        method: "GET",
                        ContentType: "application/json",
                    });
                    const responseJSON = await response.json();

                    setStore({ people: responseJSON.results, });

                    localStorage.setItem(`people`, JSON.stringify(store.people));
                    let storage = localStorage.getItem("people");
                } else {
                    setStore({ people: JSON.parse(localStorage.getItem("people")), });
                }
            
		    },
            getShip: async (uid) => { 
               
                const store = getStore()
                console.log(store.selectShip)
                
                console.log(localStorage.getItem("ship"))
                //if (localStorage.getItem("ship") == null) {
                    console.log("***", uid)
                    const response = await fetch(`https://www.swapi.tech/api/starships/${uid}`, {
                        method: "GET",
                        ContentType: "application/json",
                    });
                    console.log(response)
                    const responseJSON = await response.json();
                    responseJSON.uid=uid
                    console.log(responseJSON)
                    setStore({ selectShip: responseJSON.result.properties});

                    localStorage.setItem(`ship`, JSON.stringify(store.ship));
                    
                //} else {
               
                let storage = localStorage.getItem("ship");
                setStore({ selectShip: JSON.parse(storage), });
              //  }
                console.log(store.ship)
             },

            getShips: async () => {
				
				const store = getStore()
				if (localStorage.getItem("ships") === null) {
                    const response = await fetch(`https://www.swapi.tech/api/starships`, {
                        method: "GET",
                        ContentType: "application/json",
                    });
                    const responseJSON = await response.json();
                    console.log(responseJSON)
                    setStore({ ships: responseJSON.results, });
                    
                    localStorage.setItem(`ships`, JSON.stringify(store.ships));
                    //let storage = localStorage.getItem("ships");
                } else {
                    setStore({ ships: JSON.parse(localStorage.getItem("ships")), });
                }
                console.log(store.ships)
            },
            
	},
};
}

export default getState;