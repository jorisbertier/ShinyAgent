import '../../styles/App.css';
// import Freelances from './Freelances/Freelances';
import HomeIllustration from '../../assets/home-illustration.svg'
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms'

const App = styled.div `
  display: flex;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  margin: 30px;
`
const Presentation = styled.img `

`

const HomeContainer = styled.div `
  width: 50%;
  text-align: center;
`

function Home() {

  return (
    <App>
      <HomeContainer>
        <h1>Repérer vos besoins,<br></br> on s'occupe du reste,<br></br>avec les meilleurs<br></br>talents</h1>
        <StyledLink to='/survey/1' $isFullLink>Faire le test</StyledLink>
      </HomeContainer>
      <HomeContainer>

      <Presentation src={HomeIllustration} alt="Home illustration"></Presentation>
      </HomeContainer >
      {/* <Freelances /> */}
    </App>
  );
}

export default Home;
