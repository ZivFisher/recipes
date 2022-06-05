import styled from "styled-components";
import {NavLink} from 'react-router-dom'

const Wrapper = styled.div`
margin: 0rem 4rem 2rem 4rem;
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const Card1 = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: #ffffff;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Card2 = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns : repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem
`;

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0rem 0rem 2rem;  
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  // cursor: pointer;
  transform: scale(0.8);

  h4{
    color: white;
    font-size: 0.8rem;
  }
  svg{
    color: white;
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
  }
`

const FormStyle = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  input{
    margin-right: 2rem;
    margin-left: 2rem;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 1rem 3%;
    border-radius: 1rem;
    width: 100%;
  }

  svg{
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translate(100%, -50%);
    color: white;
  }
`
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2{
    margin-bottom: 2rem;
  }

  ul{
    margin-top: 2rem;
  }

  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`

const Info = styled.div`
  margin-left: 10rem;
`

export {
  Wrapper, 
  Gradient, 
  Card1 , 
  Card2, 
  Grid, 
  SLink, 
  List,
  FormStyle,
  Info,
  Button,
  DetailWrapper
};