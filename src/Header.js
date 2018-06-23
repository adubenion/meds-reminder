import React from 'react';
import { Button, Hero, Container, Title, SubTitle, Delete, Field, Input, Control } from 'reactbulma';

export const Header = () => {
  return(
        <Hero>
          <Hero.Body>
            <Container>
              <Title>
                Meds Reminder
              </Title>
              <SubTitle>
                A Simple Solution to Your Medication Needs
              </SubTitle>
            </Container>
          </Hero.Body>
        </Hero>
    );
}