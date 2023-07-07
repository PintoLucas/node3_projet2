import React, {useEffect, useState} from 'react';
import '../styles/style.css'

function ListFurnitures() {
    const [listOfFurnitures, setListFurniture] = useState([])

    useEffect(() => {
        async function fetchFurnitures() {
            try {
                let headers = new Headers();
                const response = await fetch('http://localhost:3000/api/furniture', {
                    method: 'GET',
                    headers: headers,
                })
                const listFurnitures = await response.json()
                setListFurniture(listFurnitures)
                console.log(listFurnitures);
            } catch (err) {
                console.log(err)
            }
        }

        fetchFurnitures()
    }, [])

    return (
        <div className="padding-page margin-auto column align-items">
            <h1 className="title">Liste de meubles</h1>
            <div className="column">
                {listOfFurnitures.map((furniture, index) => (
                    <div className="furniture-box">
                    <h2>{furniture.name}</h2>
                    <ul>{furniture.materiaux.map((materiau, index) => (
                        <li>{materiau.name} (quantité : {materiau.quantity})</li>
                    ))}</ul>
                    <p>Catégorie : {furniture.categorie}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListFurnitures
