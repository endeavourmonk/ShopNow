import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from '../Responsive';

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "50vh" })};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  box-shadow: 1px 1px 5px black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.bg};
  ${mobile({ height: "90%" })};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  ${mobile({
  height: "100%", width: "100%"
})};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({ display: "none" })};  
`;

const Title = styled.h1`
  font-size: 70px;
  color: ${props => props.color};
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: ${props => props.color};
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  color: ${props => props.color};
  cursor: pointer;
`;

const linkStyle = {
  textDecoration: "none",
  color: "black",
};


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    let sliderLength = sliderItems.length
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderLength - 1);
    } else {
      setSlideIndex(slideIndex < sliderLength - 1 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosSharpIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) =>
          <Slide bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title color={item.color}>{item.title}</Title>
              <Description color={item.color}>{item.description}</Description>
              <Link style={linkStyle} to="/ProductList"><Button color={item.color}>SHOP NOW</Button></Link>
            </InfoContainer>
          </Slide >
        )}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")} >
        <ArrowForwardIosSharpIcon />
      </Arrow>
    </Container >
  );
}

export default Slider;