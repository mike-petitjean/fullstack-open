import { useState } from 'react'

const Title = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad
  let average = ((good * 1) + (bad * -1)) / total
  let positive = (good * 100) / total

  if (total !== 0) {
    return (
      <div>
        <Title title='Statistics' />
        <table>
          <tbody>
            <Statistic text='Good' value={good} />
            <Statistic text='Neutral' value={neutral} />
            <Statistic text='Bad' value={bad} />
            <Statistic text='All' value={total} />
            <Statistic text='Average' value={average.toFixed(2)} />
            <Statistic text='Positive(%)' value={positive.toFixed(2)} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <Title title='Statistics' />
        <p>No feedback given</p>
      </div>
    );
  }
};

function App() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  const handleGood = () => {
    setGood(prevGood => prevGood + 1);
  };
  
  const handleNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };
  
  const handleBad = () => {
    setBad(prevBad => prevBad + 1);
  };

  return (
    <div>
      <Title title='Give Feedback' />
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
