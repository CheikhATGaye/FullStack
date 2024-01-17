
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content name = {part1.name} number = {part1.exercises}/>
      <Content name = {part2.name} number = {part2.exercises}/>
      <Content name = {part3.name} number = {part3.exercises}/>
      <Total sum = {part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}

export default App

