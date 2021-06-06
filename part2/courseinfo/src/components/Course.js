import React from 'react'

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => (
    <>   
        {parts.map(part => (
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
        <Total exercises={parts} />
    </>
)

const Part = ({ name, exercises }) => <p>{name}: {exercises}</p>

const Total = ({ exercises }) => {
    const total = exercises.reduce((a, b) => ( a += b.exercises), 0)
    return (
        <p><strong>Total of {total} exercises.</strong></p>
    )
}

const Course = ({ course }) => (
    <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
    </div>
)

export default Course