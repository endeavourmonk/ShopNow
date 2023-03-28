// import { styled } from "styled-components";
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 14px;
    font-weight: 500;
`;

const Announcements = () => {
    return (
        <Container>
            Big Billion Days Sale 30 - 80% discount
        </Container>
    );
}

export default Announcements;