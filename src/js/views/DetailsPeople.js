import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";


export const DetailsPeople = () => {
    const { store, actions } = useContext(Context);
    const selectChar = store.selectPeople;

    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + selectChar.id + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    return (
        <div className="container bg-dark">
        <div className="card mb-3  bg-dark text-light">
            <div className="row g-0">
                <div className="col-md-7">
                    <img className="img-fluid rounded-start" src={urlImage} onError={handleOnErrorImg}></img>
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <h1>{selectChar.name}</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2">
                    <h5>Name</h5>
                    <p>{selectChar.name}</p>
                </div>
                <div className="col-2">
                    <h5>Birth Year</h5>
                    <p>{selectChar.birth_year}</p>
                </div>
                <div className="col-2">
                    <h5>Eye Color</h5>
                    <p>{selectChar.eye_color}</p>
                </div>
                <div className="col-2">
                    <h5>Gender</h5>
                    <p>{selectChar.gender}</p>
                </div>
                <div className="col-2">
                    <h5>Hair Color</h5>
                    <p>{selectChar.hair_color}</p>
                </div>
                <div className="col-2">
                    <h5>Height</h5>
                    <p>{selectChar.height}</p>
                </div>
                <div className="col-2">
                    <h5>Mass</h5>
                    <p>{selectChar.mass}</p>
                </div>
            </div>
        </div>
        </div>
    );
}