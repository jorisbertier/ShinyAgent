import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
    
    const { questionNumber } = useParams()

    const questionNumberInt = parseInt(questionNumber)
    const prevQuestion = questionNumberInt === 1 ? 1 : questionNumberInt -1;
    const nextQuestion = questionNumberInt + 1;
//questionNumberInt < 1 ? questionNumber === 1 : questionNumber -1
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestion}`}>Précédent</Link>
            <Link to={`/survey/${nextQuestion}`} >Suivant</Link>

        </div>
    )
}

export default Survey