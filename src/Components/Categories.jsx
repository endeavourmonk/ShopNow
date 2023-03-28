import styled from "styled-components";
import { categories } from "../data";
import React from 'react'
import CategoryItem from "./CategoryItem";
import { mobile } from '../Responsive';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {
        categories.map((item) => (
          <CategoryItem item={item} key={item.key} />
        ))
      }
    </Container>
  )
}

export default Categories