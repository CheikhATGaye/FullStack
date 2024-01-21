import { useState } from 'react'

const Title = (props) => <h1>{props.text}</h1>
const Statistic = (props) => <h1>{props.statistic}</h1>

const Button = (props) => {
  return(
  <button onClick={props.onClick}>
    {props.name}
  </button>
  )
}

const StatisticLine = (props) =>{
  if (props.sum!=0){
    return(
      <div>
      {props.text} {props.value}
      </div>)}
  else return (<p> </p>)
}

const InfoStatistic =(props) =>{
  if (props.sum==0 )
      return (<div>
        <p>No feedback given</p>
      </div>)        
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const leftButtonClick = () => {
    console.log('good button clicked')
    const updateGood = good + 1
    setGood(updateGood)
    setTotal(updateGood + neutral + bad)
  }

  const middleButtonClick = () => {
    console.log('neutral button clicked')
    const updateNeutral = neutral +1
    setNeutral(updateNeutral)
    setTotal(good + updateNeutral + bad)
  }

  const rightButtonClick = () => {
    console.log('bad button clicked')
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
      <InfoStatistic sum = {total}/>
      <StatisticLine sum = {total} text = {'good'} value = {good}/>
      <StatisticLine sum = {total} text = {'neutral'} value = {neutral}/>
      <StatisticLine sum = {total} text = {'bad'} value = {bad}/>
      <StatisticLine sum = {total} text = {'all'} value = {total}/>
      <StatisticLine sum = {total} text = {'average'} value = {average}/>
      <StatisticLine sum = {total} text = {'positive'} value = {positive}/>
    </div>
    </div>
  )
}

export default App