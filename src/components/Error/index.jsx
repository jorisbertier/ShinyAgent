import styled from 'styled-components'
import ErrorImg from '../../assets/404.svg'
import colors from '../../utils/style/Color'

const ErrorWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    max-width: 100vw;
    flex-direction: column;
`

const Illustration = styled.img `
    width: 875px;
    height: 376px;
    top: 390px;
    left: 282px;
`

const ErrorTitle = styled.h1 `
    font-weight: 300;
`
const ErrorSubtitle = styled.h2 `
    font-weight: 300;
    color: ${colors.secondary}
`

function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>Oups</ErrorTitle>
            <Illustration src={ErrorImg} alt='error'></Illustration>
            <ErrorSubtitle>Il semblerait que la page que vous cherchez n’existe pas</ErrorSubtitle>
        </ErrorWrapper>
    )
}

export default Error