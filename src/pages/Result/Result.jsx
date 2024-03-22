import React, { useContext } from 'react'
import { SurveyContext } from '../../utils/style/context'

export const Result = () => {
  const {  answers } = useContext(SurveyContext)
  console.log(answers)
  
  return (
    <div>Result</div>
  )
}
