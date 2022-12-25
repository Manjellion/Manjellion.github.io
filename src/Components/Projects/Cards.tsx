import { AiFillGithub, AiOutlineLaptop } from 'react-icons/ai'
import { Card, CardContent, Button, Typography, CardActions } from '@mui/material'

type cardProps = {
    header: string;
    info: string;
    stack: string;
    websiteURL: string;
    gitHubURL: string;
}

function Cards({ header, info, stack, websiteURL, gitHubURL}: cardProps) {
    return (
        <>
            <Card variant='outlined' style={{
                backgroundColor: '#1a4d2e'
            }}>
                <CardContent>
                    <CardActions style={{
                        paddingBottom: 20,
                    }}>
                        <Typography variant='h5' fontWeight={500} color="#fff">
                            {header}
                        </Typography>
                        <Button>
                            <a href={websiteURL} target="_blank"><AiOutlineLaptop size={32} color='#fff'/></a>
                        </Button>
                        <Button>
                            <a href={gitHubURL} target="_blank"><AiFillGithub size={32} color='#fff'/></a>
                        </Button>
                    </CardActions>
                    <Typography fontSize={14} paddingBottom={2} color='#fff'>
                        {info}
                    </Typography>
                    <Typography color='#fff'>
                        {stack}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default Cards