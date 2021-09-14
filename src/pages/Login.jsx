import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
    url("https://www.adobe.com/express/create/media_13bf4990665fe60a52ad1515300bbf62047e17fc3.jpeg?width=2000&format=webply&optimize=medium")
    center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })};
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`
const Link = styled.a`
 margin: 5px 0px;
 font-size: 12px;
 text-decoration: none;
 cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>FORGET PASSWORD?</Link>
          <Link>CREATE A NEW ACOOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
