import React from 'react'
import '../Style/style.css'

function About() {
    return (
        <div className='about-container'>
            <h1>About</h1>
            <p>I am currently in my final year and studying Computer Science at University of East London</p>
            <p>I enjoy working on website espescially frontend as its more of the creative side</p>
            <p>Outside of tech, I enjoy reading and watching fiction</p>
            <p>Here are some of the technologies I have experience</p>
            <div className='about-skill-section'>
                <ul>
                    <li>ReactJS/ React-native</li>
                    <li>JavaScript (NodeJS, Express)</li>
                    <li>AWS (Lambda, DynamoDB, AppSync, Cognito, Amplify)</li>
                </ul>
                <ul>
                    <li>HTML5/ CSS (Tailwind, SaSS, Bootstrap)</li>
                    <li>Java (JavaFX, JUnit)</li>
                    <li>GraphQL, MongoDB, Oracle SQL</li>
                </ul>
            </div>
        </div>
    )
}

export default About