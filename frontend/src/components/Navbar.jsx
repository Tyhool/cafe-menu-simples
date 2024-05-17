
import React, { useState } from 'react';
import styled from "styled-components";
import  { mobile }  from "../responsive";



const Container = styled.div`
  background-color: #010103;
  height: 60px;
  padding: 20px 7px;
  ${mobile({ 
    height: "50px",
    padding: "8px 2px",
    margin: "-1px 0px"
   })
  }`;

const Warapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const NavItem = styled.div`
  color: white;
`;

const NavLink = styled.a`
  color:white;
  text-decoration: none;
`;

function Navbar() {


  return (
    <Container>
        <Warapper>
          <NavItem><NavLink href='#cafe' >Cafe</NavLink></NavItem>
          <NavItem><NavLink href='#aperitivo' >Aperitivo</NavLink></NavItem>
          <NavItem><NavLink href='#chocolate' >Chocolate</NavLink></NavItem>
          <NavItem><NavLink href='#aromatizador' >Aromatizador</NavLink></NavItem>
        </Warapper>
    </Container>
  )
}

export default Navbar;