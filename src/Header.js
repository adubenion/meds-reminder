import React from 'react';
import { Button, Hero, Container, Title, SubTitle, Delete, Field, Input, Control } from 'reactbulma';

export const Header = () => {
  return(
      <div>
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
    )}