import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from '../Responsive';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 60vh;
    /* width:  calc(100% / 3); */
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "25vh" })};
`;

const Info = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #00000062;
`;

const Title = styled.h1`
    color: #ffffff;  
    margin-bottom: 20px;
    font-weight: 900;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 800;
`;

const linkStyle = {
    textDecoration: "none",
    color: "black",
};

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Link style={linkStyle} to="/ProductList"><Button>SHOP NOW</Button></Link>
            </Info>
        </Container>
    );
}

export default CategoryItem;