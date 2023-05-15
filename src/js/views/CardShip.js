import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';





export const CardShip = ({ uid, name,}) => {
    const { store, actions } = useContext(Context);
    const ship = store.ships;

    const urlImage = "https://starwars-visualguide.com/assets/img/starships/" + uid + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"; 
        
    }


    return (
        <div className="col">
            <div className="card border-dark my-3 mx-2 text-bg-dark">
                <img alt="" src={urlImage} onError={handleOnErrorImg}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    
                       <div className="d-flex justify-content-between">
                        <Link to={`/starships/${uid}`} className="btn btn-secondary" 
                            onClick={() =>{ 
                                actions.setShipImage(urlImage);
                                actions.getShip(uid); 
                            }}>
                                Details
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}