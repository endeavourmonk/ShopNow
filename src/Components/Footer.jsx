import styled from 'styled-components'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import RoomSharp from '@mui/icons-material/RoomSharp';
import PhoneSharp from '@mui/icons-material/PhoneSharp';
import EmailSharp from '@mui/icons-material/EmailSharp';
import { mobile } from '../Responsive';

const Container = styled.section` 
    display: flex;
    ${mobile({ flexDirection: "column" })};
    ${mobile({ flexDirection: "column", justifyContent: "center", alignItems: "center" })};
    justify-content: space-around;
`;

const Left = styled.div` 
    flex: 1;
    display: flex;
    ${mobile({ flexDirection: "column", justifyContent: "center", alignItems: "center" })};
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.p` 

`;

const SocialIconsContainer = styled.div` 
    display: flex;
`;

const SocialIcon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: ${(props) => props.color};
    cursor: pointer;
    transition: all ease 0.25s;
    &:hover {
        transform: scale(1.1);
    }
`;

const Right = styled.div` 
    flex: 1;
    padding: 20px;
`;

const Center = styled.div` 
    flex: 1;
    padding: 20px;
    ${mobile({ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" })};
`;

const Lists = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    ${mobile({ flexDirection: "row", justifyContent: "spaceAround", alignItems: "center" })};
    flex-direction: column;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: 300;
`;

const Title = styled.h3` 
    margin-bottom: 30px;
`;

const Description = styled.p` 
    margin: 20px 0px;
`;

const Payments = styled.img` 
    width: 50%;
`;

const Contact = styled.div` 
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const linkStyle = {
    textDecoration: "none",
    color: "black",
};


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Shop</Logo>
                <Description>One stop shopping solution</Description>
                <SocialIconsContainer>
                    <SocialIcon color='#d62976'>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color='#00acee'>
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color='#0072b1'>
                        <LinkedInIcon />
                    </SocialIcon>
                    <SocialIcon color='#3b5998'>
                        <FacebookIcon />
                    </SocialIcon>
                </SocialIconsContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <Lists>
                    <ListItem> <Link style={linkStyle} to="/">Home</Link></ListItem>
                    <ListItem> <Link style={linkStyle} to="/Cart">Cart</Link></ListItem>
                    <ListItem><Link style={linkStyle} to="/ProductList">Products</Link></ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                    <ListItem>Help</ListItem>
                </Lists>
            </Center>
            <Right>
                <Title>Contact</Title>
                <Contact>
                    <RoomSharp /> Godolia Chowk, Varanasi, Uttarpradesh, India
                </Contact>
                <Contact>
                    <PhoneSharp /> +91 1234567890
                </Contact>
                <Contact>
                    <EmailSharp /> shopnow@shopnow
                </Contact>
                <Payments src='https://www.citypng.com/public/uploads/preview/-11597193844xtj2mnv37b.png' />
            </Right>
        </Container>
    )
}

export default Footer;