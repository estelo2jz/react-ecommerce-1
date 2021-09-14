import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from "../responsive";

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopBottom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`
const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`
const TopText = styled.span `
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })};
`
const Info = styled.div`
flex: 3
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })};
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 50%;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.div``
const ProductId = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
`
const ColorContainer = styled.div`
  display: flex;
`
const ProductSize = styled.span``
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })};
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })};
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "34px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopBottom>CONTINUE SHOPPING</TopBottom>
            <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText> Your Wishlist (0)</TopText>
            </TopTexts>
            <TopBottom type="filled">CHECKOUT NOW</TopBottom>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                <Image src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/46b07039-1ddb-4ab6-9dcc-2c5a15cc03e4/sportswear-t-shirt-ZX3kKb.png" />
                  <Details>
                    <ProductName><b>Product:</b>NIKE Grapic Tee's</ProductName>
                    <ProductId><b>ID:</b> 9876543210</ProductId>
                    <ColorContainer>
                      <ProductColor color="black" />
                      <ProductColor color="red" />
                      <ProductColor color="blue" />
                      <ProductColor color="yellow" />
                      <ProductColor color="green" />
                    </ColorContainer>
                    <ProductSize><b>SIZE:</b> 26.8</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>4</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 58.99</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                <Image src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/618a70e0-f9cc-44b1-b339-8905d590c508/air-max-2090-eoi-mens-shoes-hHt1X0.png" />
                  <Details>
                    <ProductName><b>Product:</b>NIKE Air Max 2090 EOI</ProductName>
                    <ProductId><b>ID:</b> 9876543210</ProductId>
                    <ColorContainer>
                      <ProductColor color="black" />
                      <ProductColor color="red" />
                      <ProductColor color="blue" />
                      <ProductColor color="yellow" />
                      <ProductColor color="green" />
                    </ColorContainer>
                    <ProductSize><b>SIZE:</b> 26.8</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 145.99</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F08%2Fnike-react-infinity-run-flyknit-fast-city-ct1499-001-release-001.jpg?q=75&w=800&cbr=1&fit=max" />
                  <Details>
                    <ProductName><b>Product:</b> NIKE SB Running Shoes</ProductName>
                    <ProductId><b>ID:</b> 9876543210</ProductId>
                    <ColorContainer>
                      <ProductColor color="black" />
                      <ProductColor color="red" />
                      <ProductColor color="blue" />
                      <ProductColor color="yellow" />
                      <ProductColor color="green" />
                    </ColorContainer>
                    <ProductSize><b>SIZE:</b> 26.8</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 37.99</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 345.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ -45.34</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Discount Shipping</SummaryItemText>
                <SummaryItemPrice>$ -14.67</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice >$ 468.72</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW!</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
