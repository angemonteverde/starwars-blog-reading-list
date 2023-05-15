import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from  'react-router-dom' ;



export const DetailsShip = () => {

    const { store, actions } = useContext(Context);
    const selectShip = store.selectShip;
    let { shipId } = useParams();


    //https://starwars-visualguide.com/assets/img/starships/5.jpg
    console.log(selectShip.uid)
    //const urlImage = "https://starwars-visualguide.com/assets/img/starships/" + shipId + ".jpg";
    const urlImage = store.shipImage
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
                        <h1>{selectShip.name}</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2">
                    <h5>Name</h5>
                    <p>{selectShip.name}</p>
                </div>
                <div className="col-2">
                    <h5>Model</h5>
                    <p>{selectShip.model}</p>
                </div>
                <div className="col-2">
                    <h5>Starship Class</h5>
                    <p>{selectShip.starship_class}</p>
                </div>
                <div className="col-2">
                    <h5>Manufacturer</h5>
                    <p>{selectShip.manufacturer}</p>
                </div>
                <div className="col-2">
                    <h5>Cost</h5>
                    <p>{selectShip.cost_in_credits}</p>
                </div>
                <div className="col-2">
                    <h5>Lenght</h5>
                    <p>{selectShip.lenght}</p>
                </div>
                <div className="col-2">
                    <h5>Crew</h5>
                    <p>{selectShip.crew}</p>
                </div>
                <div className="col-2">
                    <h5>Passengers</h5>
                    <p>{selectShip.passengers}</p>
                </div>
                <div className="col-2">
                    <h5>Max Atmosphering Speed</h5>
                    <p>{selectShip.max_atmosphering_speed}</p>
                </div>
                <div className="col-2">
                    <h5>Hyperdrive Rating</h5>
                    <p>{selectShip.hyperdrive_rating}</p>
                </div>
            </div>
        </div>
        </div>
    );
}