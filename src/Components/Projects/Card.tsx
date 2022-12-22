import React from 'react'
import '../Style/style.css'
import { AiFillGithub, AiOutlineLaptop } from 'react-icons/ai'

type cardProps = {
    header: string;
    info: string;
    stack: string;
    websiteURL: string;
    gitHubURL: string;
}

function Card({ header, info, stack, websiteURL, gitHubURL}: cardProps) {
    return (
        <div className='card-container'>
            <div className='card-link-section'>
                <a href={websiteURL} target="_blank">
                    <AiOutlineLaptop 
                        color='white'
                        size={26}
                    />
                </a>
                <a href={gitHubURL} target="_blank">
                    <AiFillGithub 
                        color='white'
                        size={26}
                    />
                </a>
            </div>
            <h2>{header}</h2>
            <p>{info}</p>
            <p>{stack}</p>
        </div>
    )
}

export default Card