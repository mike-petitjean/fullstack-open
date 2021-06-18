import React, { useState } from 'react'

const Filter = ({ searchTerm, handleSearchTerm }) => (
  <input 
    value={searchTerm}
    onChange={handleSearchTerm}
    placeholder='Search'
  />
)

const PersonForm = ({ addPerson, newName, handleNewName, newNumber, hanldeNewNumber }) => (
  <form onSubmit={addPerson}>
    <div>
      Name: <input
        value={newName}
        onChange={handleNewName} 
      />
    </div>
    <div>
      Number: <input
        value={newNumber}
        onChange={hanldeNewNumber}
      />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
)

const Persons = ({ persons, searchTerm }) => (
  <ul>
    {persons
      .filter(person =>
        person.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1)
      .map(person => (
        <Person key={person.name} person={person} />
    ))}
  </ul>
)

const Person = ({ person }) => (
  <li>{person.name} {person.number}</li>
)
  
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchTerm, setSearchTerm ] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    if (!newName || !newNumber) return
    if (persons.some(person => person.name.toUpperCase() === newName.toUpperCase())) 
      return alert(`${newName} is already added to phonebook`)
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons([...persons, personObject])
    setNewName('')
    setNewNumber('')
  }
  
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  
  const hanldeNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        searchTerm={searchTerm} 
        handleSearchTerm={handleSearchTerm} 
      />
      <h3>Add a new</h3>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        hanldeNewNumber={hanldeNewNumber}
      />
      <h3>Numbers</h3>
      <Persons 
        persons={persons}
        searchTerm={searchTerm}
      />
    </div>
  )
}

export default App