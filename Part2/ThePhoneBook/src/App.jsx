import { useState, useEffect } from 'react'
import Display from './components/Display'
import personServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  
  useEffect(() => {
    console.log('effect')
    personServices
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)}
      ) 
  }, [])
 
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
     }
    personServices
     .create(nameObject)
     .then(returnedName=>{
      setPersons(persons.concat(returnedName))
      setNewName('')
      setNewNumber('')
     }
      )    
    }  
      
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }  
    
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    }  
  const handleSearch =(event) => {
    console.log(event.target.value)
    setSearch(event.target.value)

  }  
  const handleRemoving = (id) => {
    personServices
      .remove(id, persons)
      .catch(alert(`error`))
      }
      
  
    

  return (
    <div>
      <h2>Phonebook</h2>
      <p className='message'>Added</p>
      <div>
        filter shown with: 
        <input value = {search} onChange={handleSearch}/>  
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
      <div>
        name:<input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
          <button type="submit">add</button>
      </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map((props) =>
         <div key={props.id}> 
         <Display  Delete={handleRemoving} name={props.name} number={props.number}/>
         </div>
         )
      }
      </div>
    </div>
  )
}
export default App
