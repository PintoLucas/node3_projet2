import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function CreateFurniture() {
    let [name, setName] = useState("");
    let [materiaux, setMateriaux] = useState("");
    let [categorie, setCategorie] = useState("");

    let navigate = useNavigate();


    async function createfurniture(event) {
        event.preventDefault();
        const newFurniture = {name, materiaux, categorie};
        let getUserId = JSON.parse(window.localStorage.getItem('accountInfos')).userId;

        try {
            let headers = new Headers();
            headers.append('Content-type', 'application/json');
            let res = await fetch("http://localhost:3000/api/furniture/add", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    name: name,
                    materiaux: materiaux,
                    categorie: categorie
                }),
            });
            let response = await res.json();
            alert('Meuble ajouté !');
            navigate('/listfurnitures');
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <div className="column align-items">
            <h2>Ajouter un meuble</h2>
            <form className="form-field align-items-start" onSubmit={createfurniture}>
                <p className="lightgrey input-title">Nom du meuble</p>
                <input value={name} className="width-fill-available" type="text" onChange={(e) => setName(e.target.value)}/>
                <p className="lightgrey input-title">Choix des matériaux</p>
                <input className="width-fill-available" value={materiaux} type="text" onChange={(e) => setMateriaux(e.target.value)}/>
                <p className="lightgrey input-title">Catégorie du meuble</p>
                <select onChange={(e) => setCategorie(e.target.value)}>
                    <option value="Armoire">Armoire</option>
                    <option value="Étagère">Étagère</option>
                </select>
                <button className="validate-button width-fill-available" type="submit">Créer nouveau meuble</button>
            </form>
        </div>
    )
}

export default CreateFurniture
