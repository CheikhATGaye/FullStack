import { useState } from 'react'

const Title = (props) => <h1>{props.text}</h1>
const Statistic = (props) => <h1>{props.statistic}</h1>
const StatisticLine = (props) =>{
  return(<div>
    {props.text} {props.value}
  </div>)
}
const Button = (props) => {
  return(
  <button onClick={props.onClick}>
    {props.name}
  </button>
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const leftButtonClick = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setTotal(updateGood + neutral + bad)
  }

  const middleButtonClick = () => {
    const updateNeutral = neutral +1
    setNeutral(updateNeutral)
    setTotal(good + updateNeutral + bad)
  }

  const rightButtonClick = () => {
    const updateBad = bad +1
    setBad(updateBad)
    setTotal(good + neutral+ updateBad)
  }

    let average = (good - bad)/total;
    let positive = good/total;
  
    return (
    <div>
    <div><Title text = {'give feedback'}/></div>
    <div>
      <Button onClick={leftButtonClick} name={'good'}/> 
      <Button onClick={middleButtonClick} name={'neutral'}/>
      <Button onClick={rightButtonClick} name={'bad'}/>
    </div>
    <div>
    <Statistic statistic = {'statistic'}/>
    </div>
    <div>
      <StatisticLine text = {'good'} value = {good}/>
      <StatisticLine text = {'neutral'} value = {neutral}/>
      <StatisticLine text = {'bad'} value = {bad}/>
      <StatisticLine text = {'all'} value = {total}/>
      <StatisticLine text = {'average'} value = {average}/>
      <StatisticLine text = {'positive'} value = {positive}/>
    </div>
    </div>
  )
}

export default App