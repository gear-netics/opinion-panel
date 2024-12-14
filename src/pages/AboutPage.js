import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card><div className="about">
        <h1>About This A simple Project using daytona workspace</h1>
        <p>React app</p>
        <p>V: 1.0</p>
        <Link to="/">Back</Link>
    </div></Card>
  )
}

export default AboutPage