import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Newsletter } from "../Components/Newsletter";
import Products from "../Components/Products";
import React, { useEffect } from 'react';

function Example(title) {
    useEffect(() => {
        document.title = title;
    });
}

const Container = styled.section`
    
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Filter = styled.div``;

const Select = styled.select`
    padding: 10px;
    margin: 20px;
`;
const Option = styled.option`
    font-size: 16px;
    font-weight: 500;
`;

const ProductList = () => {
    return (
        <Container>
            {Example('Products')}
            <Announcements />
            <Navbar />
            <Title>Products</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select >
                        <Option disabled selected>Items type</Option>
                        <Option>T-shirts</Option>
                        <Option>Shirts</Option>
                        <Option>Denims</Option>
                        <Option>Shoes</Option>
                        <Option>Hand Bags</Option>
                    </Select>
                    <Select >
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select >
                        <Option disabled selected>Sort By</Option>
                        <Option>Price: Low - High</Option>
                        <Option>Price: High - Low</Option>
                        <Option>Relevance</Option>
                        <Option>Popularity</Option>
                        <Option>Newest First</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList