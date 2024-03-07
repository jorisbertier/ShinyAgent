import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        color: blue; /* Changer la couleur au survol */
    }
`

function Header() {
    return (
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey/1">Questionnaire</StyledLink>
            <StyledLink to="/freelances">Profils</StyledLink>
            <StyledLink to="/result">Result</StyledLink>
        </nav>
    )
    
}

export default Header