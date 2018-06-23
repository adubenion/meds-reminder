import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { firebase, firestore, init, db } from './firebase';
import { Header } from './Header';
import { Form } from './Form';






class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      favAnimal: '',
      favColor: ''
    }
    this.handleForm = this.handleForm.bind(this)
  }
  handleForm(e) {
    var value = e.target.value;
    var name = e.target.name
    console.log(`${name}: ${value}`)
    this.setState({[name]:value}, () => {console.log(this.state)})
    // console.log(this.state);
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
      <div>
        <Header />
        <Form handleForm={this.handleForm} form={this.state} />
      </div>
    );
  }
}

export default App;
