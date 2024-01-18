const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.name}, {props.number}</p>
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.sum}</p>
    </div>
  )
}

import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
  <div>
   <div>
   <div>{counter}</div>
   <button onClick={increaseByOne}>
    plus
   </button>
   <button onClick={setToZero}> 
    zero
   </button>
  </div>
   <div>
    <Header course = {course.name}/>
    <Content name = {course.parts[0].name} number = {course.parts[0].exercises}/>
    <Content name = {course.parts[1].name} number = {course.parts[1].exercises}/>
    <Content name = {course.parts[2].name} number = {course.parts[2].exercises}/>
    <Total sum = {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
   </div>
  </div>
  )
}
export default App

