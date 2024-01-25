import Course1 from './component/Course1'
import Course2 from './component/Course2'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  const array1 = courses[0].parts.map(Number=>Number.exercises)
  const total1 = array1.reduce((accumulator,i)=>accumulator+i,0)
  
  const array2 = courses[1].parts.map(Number=>Number.exercises)
  const total2 = array2.reduce((accumulator,i)=>accumulator+i,0)

  return (
    <div>
    <h1>Web development curriculum</h1>
    <Course1 course={courses[0]} />
    <b>total of {total1} exercises</b>
    <Course2 course={courses[1]}/>
    <b>total of {total2} exercises</b>    
    </div>
  )
}

export default App
