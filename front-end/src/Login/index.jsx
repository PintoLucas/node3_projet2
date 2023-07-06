import {useState} from "react";
import React from 'react';
import {useNavigate} from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    async function login(event) {
        event.preventDefault();

        try {
            let res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {"Content-type": 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            let response = await res.json();
            console.log(response);
            if (res.status === 200) {
                localStorage.setItem("accountInfos", JSON.stringify(response));
                navigate('/listfurnitures');
            } else {
                alert(response.error);
            }
        } catch(error) {
            alert(error);
        }
    };

    async function register(event) {
        event.preventDefault();
        try {
            let res = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {"Content-type": 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password,
                    isAdmin: false
                }),
            });
            let response = await res.json();
            if (res.status === 201) {
                alert('Utilisateur ' + email + ' créé avec succès !')
            } else {
                alert(response.error);
            }
        } catch(error) {
            alert(error);
        }
    };

    return (
        <div className="margin-auto form-field login-field">
            <form onSubmit={login} className="column align-items responsive-width-100">
                <input value={email} type="text" placeholder="Adresse e-mail"
                       onChange={(e) => setEmail(e.target.value)} required/>
                <input value={password} type="password" placeholder="Mot de passe"
                       onChange={(e) => setPassword(e.target.value)} required/>
                <button className="validate-button" type="submit">Connexion</button>
                <hr />
            </form>
            <button className="register-button" onClick={register}>
                Créer un compte
            </button>
        </div>
    )
}


export default Login
