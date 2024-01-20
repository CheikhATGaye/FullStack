import { useState } from 'react'

const Text = (props) =>{
  return(
  <div>
    <h1>{props.name}</h1>
  </div>)
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const leftButtonClick = () => setGood(good + 1)

  const middleButtonClick = () => setNeutral(neutral + 1)

  const rightButtonClick = () => setBad(bad + 1)
  

  return (
    <div>
    <Text name = {'give feedback'}/>
    <div>
      <button onClick={leftButtonClick}>good
      </button> 
      <button onClick={middleButtonClick}>neutral
      </button>
      <button onClick={rightButtonClick}>bad
      </button>
    </div>
      <Text name = {'statistic'}/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App