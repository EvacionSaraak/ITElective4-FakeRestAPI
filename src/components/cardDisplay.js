import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    Grid,
    Typography 
} from '@mui/material';
import React from 'react';

function CardDisplay({userId="User Id is N/A", id="ID is N/A", title="Title is N/A", body="Body is N/A"}) {
    
    const handleClick = (e) => {
        alert("You Clicked '" + title + "'!");
    }
    
    return (
        <Grid item xs={2} sm={4} md={4} key={id}>
            <br></br>
            <Card>
                <CardHeader>{title}</CardHeader>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button onClick={handleClick} size="small" color="primary">?</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default CardDisplay;