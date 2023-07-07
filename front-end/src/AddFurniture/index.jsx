import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

function CreateFurniture() {
    let [name, setName] = useState("");
    let [materiaux, setMateriaux] = useState("");
    let [categorie, setCategorie] = useState("");

    let navigate = useNavigate();

    const [listOfBois, setListBois] = useState([])
    const [listOfFer, setListFer] = useState([])
    const [listOfPlastique, setListPlastique] = useState([])

    const [materials, setMaterials] = useState([]);
    const [materialCounts, setMaterialCounts] = useState([]);

    const addToCounter = (event, materiau) => {
        event.preventDefault();
        // setMaterialCounts( current => [...current, {"name": materiau, "quantity": 2}]);
        console.log(materialCounts);
        const existingMaterialIndex = materialCounts.findIndex(item => item.name === materiau);

        if (existingMaterialIndex !== -1) {
            const updatedMaterialCounts = [...materialCounts];
            updatedMaterialCounts[existingMaterialIndex].quantity += 1;
            setMaterialCounts(updatedMaterialCounts);
        } else {
            setMaterialCounts(current => [...current, { name: materiau, quantity: 1 }]);
        }
      };
    

    useEffect(() => {
        async function fetchMaterials() {
            try {
                let headers = new Headers();
                let jwtToken = JSON.parse(window.localStorage.getItem('accountInfos')).token;
                headers.append('Authorization', 'Bearer ' + jwtToken);
                const response = await fetch('http://localhost:3000/api/material', {
                    method: 'GET',
                    headers: headers,
                })
                const listMaterials = await response.json();
                setListBois(listMaterials[0].Bois.Matériaux);
                setListFer(listMaterials[0].Fer.Matériaux);
                setListPlastique(listMaterials[0].Plastique.Matériaux);
            } catch (err) {
                console.log(err)
            }
        }

        fetchMaterials()
    }, [])


    async function createfurniture(event) {
        event.preventDefault();
        const newFurniture = {name, materialCounts, categorie};
        let getUserId = JSON.parse(window.localStorage.getItem('accountInfos')).userId;

        try {
            let headers = new Headers();
            headers.append('Content-type', 'application/json');
            let res = await fetch("http://localhost:3000/api/furniture/add", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    name: name,
                    materiaux: materialCounts,
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
        <div className="padding-page margin-auto column align-items">
            <h1 className="title">Ajouter un meuble</h1>
            <form className="form-field align-items-start">
                <p className="lightgrey input-title">Nom du meuble</p>
                <input value={name} className="width-fill-available" type="text" onChange={(e) => setName(e.target.value)}/>
                <p className="lightgrey input-title">Choix des matériaux</p>
            <div className="add-materials">
                {listOfBois.map((materiau, index) => (
                    <button
                    key={index}
                    value={materiau}
                    onClick={(event) => addToCounter(event, materiau)}
                    >
                    {materiau}
                    </button>
                ))}<br />
                {listOfFer.map((materiau, index) => (
                    <button key={index} value={materiau} onClick={(event) => addToCounter(event, materiau)}>
                    {materiau}
                    </button>
                ))}<br />
                {listOfPlastique.map((materiau, index) => (
                    <button key={index} value={materiau} onClick={(event) => addToCounter(event, materiau)}>
                    {materiau}
                    </button>
                ))}

                {materialCounts !== '' && (
                <ul>
                    {materialCounts.map((materiau) => (
                    <li key={materiau.name}>
                        {materiau.name} (quantité: {materiau.quantity})
                    </li>
                    ))}
                </ul>
                )}
                </div>
                <ul id="counterlist"></ul>
                <p className="lightgrey input-title">Catégorie du meuble</p>
                <select onChange={(e) => setCategorie(e.target.value)}>
                    <option>Sélectionnez une catégorie</option>
                    <option value="Armoire">Armoire</option>
                    <option value="Étagère">Étagère</option>
                </select>
                <button className="validate-button width-fill-available" type="submit" onClick={createfurniture}>Créer nouveau meuble</button>
            </form>
        </div>
    )
}

export default CreateFurniture
