import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Firebase setup
const firebase = require('firebase')
require ('firebase/firestore')
firebase.initializeApp({
	  apiKey: "AIzaSyD1mOM6wv8UMyh_f-P3oXZPAukbMp6FisA",
	  authDomain: "test-project-1b484.firebaseapp.com",
	  projectId: "test-project-1b484"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var testRef = db.collection("Test").doc("Test");
    
    testRef.get().then(doc => {
      if (doc.exists) {
        console.log('Document data: ', doc.data());
      } else {
        console.log('No such document');
      }
    }).catch(error => {
      console.log('Error getting document: ', error)
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
