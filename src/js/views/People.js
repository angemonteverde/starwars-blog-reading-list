import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// Custom Componet que muestra las Cards de los planetas
import { CardPeople } from "../views/CardPeople.js";


export const People = () => {
	const { store, actions } = useContext(Context);
	// Traemos los planets del store
	const Char = store.people;
    // const selectPlanet = store.selectPlanet;

	return (
		<div className="container bg-dark">
            <h1 className="text-light text-center pt-4">People</h1>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{   Char.map((e, i)=>{
                        let card = <CardPeople key= {i} id={i+1} name = {e.name} birth_year = {e.birth_year} gender = {e.gender} eye_color = {e.eye_color} hair_color = {e.hair_color} height = {e.height} mass = {e.mass}/>
                        return card;
                    })
                }
			</div>
		</div>
	);
};