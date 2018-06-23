import React, { Component } from 'react';
import { Button, Hero, Container, Title, SubTitle, Delete, Field, Input, Control } from 'reactbulma';

export const Form = (props) => {
  return(
      <div key='form'>
        <Field>
          <label>First Name</label>
          <Control>
           <Input small placeholder="First Name" name="firstName" onChange={props.handleForm} />
          </Control>
        </Field>
        <Field>
          <label>Last Name</label>
          <Control>
           <Input small placeholder="First Name" name="lastName" onChange={props.handleForm} />
          </Control>
        </Field>
        <Field>
          <label>Favorite Animal</label>
          <Control>
           <Input small placeholder="Favorite Animal" name="favAnimal" onChange={props.handleForm} />
          </Control>
        </Field>
        <Field>
          <label>Favorite Color</label>
          <Control>
           <Input small placeholder="Favorite Color" name="favColor" onChange={props.handleForm} />
          </Control>
        </Field>
        <Field grouped>
          <Control>
            <Button primary onClick={() => {alert('Submitted')}}>Submit</Button>
          </Control>
          <Control>
            <Button danger onClick={() => {alert('I\'ve been cancelled')}}>Cancel</Button>
          </Control>
        </Field>
      </div>    
    )  
}