import styled from 'styled-components';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { mobile } from '../Responsive';

const Container = styled.section`
    height: 40vh;
    ${mobile({ height: "30vh" })};
    background-color: #e8e6e6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({ fontSize: "40px" })};
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.section`
    height: 40px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    background-color: #fff;
    ${mobile({ width: "80%" })};
`;

const Input = styled.input`
    outline: none;
    flex: 8;
    border: none;
    padding-left: 10px;
    font-size: 18px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #75E6DA;
    color: #000000;
    cursor: pointer;
    &:hover {
        background-color: #61d7cb;
    }
`;

export const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Never Miss Updates</Description>
            <InputContainer>
                <Input required />
                <Button>
                    <SendSharpIcon />
                </Button>
            </InputContainer>
        </ Container>
    )
}
