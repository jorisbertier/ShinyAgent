import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SurveyWrapper = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
`

const NextPrevWrapper = styled.div `
    display:flex;

`

function Survey() {
    
    const { questionNumber } = useParams()

    const questionNumberInt = parseInt(questionNumber)
    const prevQuestion = questionNumberInt === 1 ? questionNumberInt === 1 : questionNumberInt -1;
    const nextQuestion = questionNumberInt + 1;
//questionNumberInt < 1 ? questionNumber === 1 : questionNumber -1
    return (
        <SurveyWrapper>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <NextPrevWrapper>
                <Link to={`/survey/${prevQuestion}`}>Précédent</Link>
                {questionNumberInt === 10 ?
                ( <Link to="/result">Result</Link> )
                : (
                    <Link to={`/survey/${nextQuestion}`} >Suivant</Link>
                )}
            </NextPrevWrapper>
        </SurveyWrapper>
    ) // questionNumberInt === 10 ? 
}

export default Survey