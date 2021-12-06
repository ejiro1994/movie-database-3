/* eslint-disable default-case */
import React, { Component, useState, useEffect } from "react";
import "./App";
import "./";
import FetchMovies from "./FetchMovies";
import Header from "./components/header/Header";
import MovieList from "./components/movie-list/MovieList";
import Navigation from "./components/navigation/Navigation";
import MovieItemPage from "./components/movie-list/MovieItemPage";
import ActorPage from "./components/actors/ActorPage";
import Homepage from "./Homepage";
import fire from "./fire";
import Login from "./Login";
import Hero from "./Hero";

const App = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

	const clearInputs = () => {
		setEmail('')
		setPassword('')
	}

	const clearErrors = () => {
		setEmailError('')
		setPasswordError('')
	}




    const handleLogin = () => {
		clearErrors()
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignup = () => {
		clearErrors()
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
				clearInputs()
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

	useEffect(() => {
		authListener();
	}, [])

    return (
        <div className="App">

            {user ? (
           <Hero handleLogout={handleLogout} />
                
        ): (
            
            <Login 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
        />
        )}
		
           
            {/*  <Hero /> */}
            
            
        </div>
    );
};

export default App;

/*
check if state is loading, if equal to false then enter second if conditional where you ask if level is equal to 0 or 1 etc
exit initial if statement to an else block which contains the return statement with loader in
*/

