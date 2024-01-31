import { useState } from 'react'
import Display from './components/Display'

const App = (props) => {
  const [persons, setPersons] = useState(props.phonebook)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newId, setNewId] = useState(4)
  const [search, setSearch] = useState('')
 
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: newId+1 }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    setNewId(newId+1)
    }    
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    if (newName===persons)
      alert(`${newName} is already added to phonebook`)
    
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    }  
  const handleSearch =(event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }  
    

  return (
    <div>
      <h2>Phonebook</h2>
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
         <Display name={props.name} number={props.number}/>
         </div>
         )
      }
      </div>
    </div>
  )
}
export default App
