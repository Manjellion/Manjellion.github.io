import React from 'react'

type cardProps = {
    header: string;
    info: string;
    stack: string;
    websiteURL: string;
    gitHubURL: string;
}

function Card({ header, info, stack, websiteURL, gitHubURL}: cardProps) {
    return (
        <div>
            <div>
                <p>{websiteURL}</p>
                <p>{gitHubURL}</p>
            </div>
            <h2>{header}</h2>
            <p>{info}</p>
            <p>{stack}</p>
        </div>
    )
}

export default Card