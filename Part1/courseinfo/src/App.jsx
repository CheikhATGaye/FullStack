
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



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header course = {course}/>
      <Content name = {parts[0].name} number = {parts[0].exercises}/>
      <Content name = {parts[1].name} number = {parts[1].exercises}/>
      <Content name = {parts[2].name} number = {parts[2].exercises}/>
      <Total sum = {parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
    </div>
  )
}

export default App

