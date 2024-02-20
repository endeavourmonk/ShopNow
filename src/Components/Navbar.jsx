import { Link } from "react-router-dom";
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { mobile } from '../Responsive'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center" })};
`;

const Center = styled.div`
  flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ margin: "0 5px" })};
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })};
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({ fontSize: "24px" })};
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })};
`
const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ fontSize: 18, color: "grey" }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>
            <Link style={linkStyle} to="/">ShopNow</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItems><Link style={linkStyle} to="/Register">REGISTER</Link></MenuItems>
          <MenuItems><Link style={linkStyle} to="/Login">SIGN IN</Link></MenuItems>
          <MenuItems>
            <Link style={linkStyle} to="/Cart">
              <Badge badgeContent={5} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar