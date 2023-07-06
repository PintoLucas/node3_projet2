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
            } catch (err) {
                console.log(err)
            }
        }

        fetchFurnitures()
    }, [])

    return (
        <div className="column align-items responsive-margin-top">
            <h1 className="title">Liste de meubles</h1>
            <div className="column">
                {listOfFurnitures.map((furniture, index) => (
                    <div>
                    <h2>{furniture.name}</h2>
                    <p>{furniture.materiaux}</p>
                    <p>{furniture.categorie}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListFurnitures
