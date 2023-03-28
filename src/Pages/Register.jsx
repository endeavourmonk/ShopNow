import styled from 'styled-components'
import React, { useEffect } from 'react';
import { mobile } from '../Responsive';

function Example(title) {
    useEffect(() => {
        document.title = title;
    });
}

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://images.unsplash.com/photo-1678733231878-aabd84b58a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=363&q=80")
      center;
        background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    ${mobile({ width: "70%", padding: "20px" })};
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`;
const Title = styled.h1`
    font-size: 30px;
    ${mobile({ fontSize: "20px" })};
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    ${mobile({ margin: "10px 10px 0 0" })};
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 3px 10px rgba(0 0 0/0.2);
    outline: none;
`;
const Agreement = styled.p`
    font-size: 14px;
    ${mobile({ fontSize: "10px" })};
    color: #000000;
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    width: 40%;
    ${mobile({ width: "50%" })};
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0 128 128/0.2);
    &:hover {
        transform: scale(1.005);
    }
`;

const CheckBox = styled.input`
    width: 20px;
    height: 20px;
    margin-top: 5px;
    box-shadow: 0 3px 10px rgba(0 0 0/0.2);
`;

const Register = () => {
    return (
        <Container>
            {Example('Register')}
            <Wrapper>
                <Title>CREATE ACCOUNT</Title>
                <Form>
                    <Input required placeholder="First Name" />
                    <Input required placeholder="Last Name" />
                    <Input required placeholder='username' />
                    <Input required type={'email'} placeholder='email' />
                    <Input required type={'password'} placeholder='password' />
                    <Input required type={'password'} placeholder='confirm password' />
                    <Agreement>
                        By creating an account on our ecommerce site, you agree to abide by our terms and conditions. You must be at least 18 years old and provide accurate information. We reserve the right to terminate or suspend accounts for any reason. Your personal information will be kept confidential and used in accordance with our privacy policy.
                        <CheckBox required type={'checkbox'} />
                    </Agreement>
                    <Button>REGISTER</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register