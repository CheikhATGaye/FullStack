import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
    <button onClick={props.handleVotes}>{props.Vote}</button>
    <button onClick={props.anecdote}>{props.text}</button>
    </div>)
}
const Display = (props) =>{
  return(
    <h1>{props.text}</h1>
  )
}
let Vote = new Array(8).fill(0)

const MostVotedAnecdotes = (props) => {
  console.log(props)
  {props.anecdote}
  {props.array}
  {props.max}
  {props.array.indexOf(props.max)}
  return(
    <div>
      {props.anecdote[props.array.indexOf(props.max)]}
      <p>has {props.max}</p>
    </div>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  
  const anecdoteClick = () => {
      setSelected(Math.floor(Math.random()*8))  
      console.log('previous anecdote is ', selected)
    }
  
  
  const voteClick = () => {
      Vote[selected]+=1
      console.log('Array of votes')
      console.log(Vote)
      
  }

  let copy = [...Vote]


  

  return (
    <div>
    <div>
      <Display text = {'Anecdote of the day'}/>
      {anecdotes[selected]} 
      <p>has {copy[selected]} votes</p>
    </div>
    <div>
      <Button handleVotes={voteClick} Vote={'vote'} anecdote={anecdoteClick} text = 'next anecdote'/>
    </div>
    <div>
      <Display text = {'Anecdote with most votes'}/>
      <MostVotedAnecdotes anecdote={anecdotes} array={copy} max = {Math.max(copy)} />
    </div>
    </div>
  )
}

export default App