import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Newsletter } from "../Components/Newsletter";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import React, { useEffect } from 'react';
import { mobile } from '../Responsive';

function Example(title) {
    useEffect(() => {
        document.title = title;
    });
}

const Container = styled.section`
    
`;

const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImageContainer = styled.div`
    ${mobile({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})};
`;

const Image = styled.img`
    ${mobile({ height: "40vh", width: "100%", objectFit: "cover" })};
`;

const InfoContainer = styled.section`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
    font-weight: 100;
    font-size: 40px;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const Price = styled.p`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    ${mobile({ width: "100%" })};
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    padding-right: 5px;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
    transition: all ease 0.5s;
        &:hover {
        transform: scale(1.25);
    }
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    ${mobile({ width: "100%" })};
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all ease 0.25s;
        &:hover{
        background-color: #e0fffc;
        transform: scale(1.0025);
}
`;

const ButtonIcon = styled.span`
    margin: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eef0f0;
    box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
    transition: all ease 0.5s;
        &:hover {
        transform: scale(1.1);
        cursor: pointer;
}
`;

const Product = () => {
    return (
        <Container>
            {Example('Product')}
            <Navbar />
            <Announcements />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Highlander Shirt</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae, doloremque quidem quas nobis dicta voluptatem ad, mollitia voluptates eveniet aspernatur reiciendis enim a esse hic sunt animi ipsum numquam qui excepturi et assumenda. Ipsam itaque nesciunt voluptate, vel corrupti voluptatum nihil eum qui ducimus quia iusto possimus soluta quae.</Description>
                    <Price>4343</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="yellow" />
                            <FilterColor color="pink" />
                            <FilterColor color="gray" />
                            <FilterColor color="white" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <ButtonIcon><AddOutlinedIcon /></ButtonIcon>
                            <Amount>1</Amount>
                            <ButtonIcon><RemoveOutlinedIcon /></ButtonIcon>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product