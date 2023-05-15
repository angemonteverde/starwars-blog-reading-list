import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// Custom Componet que muestra las Cards de los planetas
import { CardShip } from "./CardShip.js";


export const Starships = () => {
	const { store, actions } = useContext(Context);
	// Traemos los planets del store
	const ships = store.ships;
	console.log(ships)
    // const selectPlanet = store.selectPlanet;

	return (
		<div className="container bg-dark">
            <h1 className="text-light text-center pt-4">Ships</h1>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{   ships.map((e, i)=>{
                        let card = <CardShip key= {e.uid} uid={e.uid} name= {e.name} />
                        return card;
                    })
                }
			</div>
		</div>
	);
};