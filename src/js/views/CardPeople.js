import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';


export const CardPeople = ({ id, name, height, mass, hair_color, skin_color, eye_color}) => {
    const { store, actions } = useContext(Context);
    const people = store.people;
    const favorites = store.favorites

    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }


    return (
        <div className="col">
            <div className="card border-dark my-3 mx-2 text-bg-dark">
                <img alt="" src={urlImage} onError={handleOnErrorImg}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Name: {name}</p>
                    <p className="card-text">Heigth: {height} </p>
                    <p className="card-text">Mass: {mass} </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/people/${id}`} className="btn btn-secondary" 
                            onClick={() => actions.getPeople({ id: id, name: name, height: height, mass: mass, hair_color: hair_color, skin_color: skin_color, eye_color: eye_color })}>
                                Details
                        </Link>
                        <Link className="btn btn-outline-warning" 
                            onClick={() => actions.addFavorite({ id, type: 'People', name }, favorites)}>
                                <i className="far fa-heart fa-lg"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}