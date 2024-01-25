
const Course1 = (props)=>{
  const Header = ({ course }) => <h2>{course}</h2>
  const Content = ({ parts }) => 
    <>
      <Part
        part={parts[0]} 
      />
      <Part
        part={parts[1]} 
      />
      <Part
        part={parts[2]} 
      />  
      <Part
        part={parts[3]} 
      />    
    </>
  const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>
       
  
return (
  <div>
    <Header course={props.course.name}/>
    <Content parts={props.course.parts}/>

  </div>
    )
  }
export default Course1
