import React from 'react'
import Card from './Card'

function Projects() {

    const projectData= [
        {title: 'Property Application', desc: 'An AWS serverless application developed on a more cost effective and efficent basis compared to traditional methods of dedicated servers and seek its suitable transition to cloud technologies.', tech: 'React-native, GraphQL, JavaScript, AWS Lambda, DynamoDB, AppSync, Cognito, Amplify', gitHubLink: 'https://github.com/Manjellion/Property-App', webLink: 'false'},
        {title: 'Your Royal Dock', desc: 'Your Royal Dock is a on going project currently being developed to increase community egagement and tourism in the Royal Docks area in London.', tech: 'React.js, CSS/Bootstrap, Node.js (Express)', gitHubLink: 'https://github.com/Manjellion/YRD-UI', webLink: 'https://your-royaldocks.netlify.app/'},
        {title: 'My Taxi App', desc: 'A cross-platform Taxi mobile application developed with a serverless appraoch using cloud computing.', tech: 'React-native, JavaScript, AWS Amplify', gitHubLink: 'https://github.com/Manjellion/taxi-app', webLink: 'false'},
        {title: 'CarPark System Software', desc: 'Car park GUI application developed using advanced Java techniques etc: File handling, Lambda expressions, class collection and Exceptions.', tech: 'Java, JavaFX, JUnit, IntelliJ', gitHubLink: 'https://github.com/Manjellion/CarSystem-GUI', webLink: 'false'},
        {title: 'Covid Tracker Web Application', desc: 'Following the MERN stack and CRUD operation we developed a web application to track users registered and show if they are infected or not.', tech: 'React.js, JavaScript, Node.js (Express), MongoDB (Mongoose)', gitHubLink: 'https://github.com/Manjellion/CW-covid-Tracker-webApp-uni', webLink: 'false'},
    ]

    return (
        <div>
            <h1>Projects</h1>
            <div>
                {
                    projectData.map((data, key) => (
                        <Card 
                            key={key}
                            header={data.title}
                            info={data.desc}
                            stack={data.tech}
                            websiteURL={data.webLink}
                            gitHubURL={data.gitHubLink}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects