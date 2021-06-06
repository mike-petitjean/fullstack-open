import React, { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
]

const VOTES_INITIAL_VALUE = new Array(anecdotes.length).fill(0);

const Title = ({ title }) => <h1>{title}</h1>
const Anecdote = ({ anecdotes, selected }) => <p>{anecdotes[selected]}</p>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const VotesCounter = ({ votes, selected }) => <p>Has {votes[selected]} votes.</p>

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(VOTES_INITIAL_VALUE)

  const mostVoted = votes.indexOf(Math.max(...votes));

  const getRandomAnecdote = () => {
    const random = (min , max) => Math.floor(Math.random() * (max - min)) + min;
    const anecdote = random(0, anecdotes.length);
    setSelected(anecdote);
  }

  const handleVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  return (
    <div>
      <>
        <Title title='Anecdote of the day' />
        <Anecdote anecdotes={anecdotes} selected={selected} />
        <VotesCounter votes={votes} selected={selected} />
        <Button handleClick={handleVotes} text='Vote' />
        <Button handleClick={getRandomAnecdote} text='Next Anecdote' />
      </>
      <>
        <Title title='Anecdote with most votes' />
        <Anecdote anecdotes={anecdotes} selected={mostVoted} />
        <VotesCounter votes={votes} selected={mostVoted} />
      </>
    </div>
  )
}

export default App;