import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { firebase, firestore, init, db } from './firebase';
import { Button, Hero, Container, Title, SubTitle, Delete } from 'reactbulma';


const Header = () => {
return <div>
        <Hero>
          <Hero.Body>
            <Container>
              <Title>
                Aaron DuBenion
              </Title>
              <SubTitle>
                Software Engineer/Web Developer
              </SubTitle>
            </Container>
          </Hero.Body>
        </Hero>
        <Button primary onClick={() => {alert('Hello!')}}>Hello World<Delete small /></Button>
      </div>
    }

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
      <Header />
    );
  }
}

export default App;
