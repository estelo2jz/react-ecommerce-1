import React from 'react';
import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`
const InfoContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`
const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 2;
  border: none;
  background-color: teal;
  color: white;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InfoContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InfoContainer>
    </Container>
  )
}

export default Newsletter
