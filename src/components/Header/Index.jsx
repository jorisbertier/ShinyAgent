import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/Color'
import LogoLight from '../../assets/light-logo.png'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}

    &:hover {
        color: blue; /* Changer la couleur au survol */
    }
`
const Cardimg = styled.img `
    height: 96px;
    width: 260px;
`
const Nav = styled.nav `
display: flex;
justify-content: space-between;
align-items: center;
background-color: grey;
`
function Header() {
    return (
        <Nav>
            <Link to='/'>
            <div>
            <Cardimg src={LogoLight} alt='logo'></Cardimg>
            </div>
            </Link>
        <div>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/freelances">Profils</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            {/* <StyledLink to="/result">Result</StyledLink> */}
        </div>
        </Nav>
    )
    
}

export default Header