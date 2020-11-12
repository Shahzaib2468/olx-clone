import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width:"100vw",
        paddingTop:"20px",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button:{
        margin:" 40px auto", 
        display:"table",
        border:"3px solid grey",
        borderRadius:"5px", 
        backgroundColor:"white", 
        padding:"8px 16px",
        cursor:"pointer",
    }

});

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <React.Fragment>
        <Container className={classes.root} variant="outlined">
            <h2>Feature Products</h2>
            <Grid container spacing={3} style={{backgroundColor:"#f1f1f1"}}>
                <Grid item sm={3}>
                    <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{paddingTop:"20px"}}>
                <Grid item sm={3}>
                    <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item sm={3}>
                    <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item sm={3}>
                    <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/rrcgyx2u66q11-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               ISUZU
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>
            </Grid>
            
        </Container>

        <div>
            <button  className={classes.button}>
                Load More
            </button>
        </div>

        <div className='bottom_olx' style={{padding:"0px 10%", display:"flex", backgroundColor:"#f1f1f1"}}>
            <div className='img'>
                <img 
                src='https://statics.olx.com.pk/external/base/img/phone-app.webp'
                />
            </div>

            <div>
                <h2>TRY THE OLX APP</h2>
                <p>Buy, sell and find just about anything using the app on your mobile.</p>
            </div>

            <div className='link' style={{marginBottom:"20px"}}>
                <h2 className='title'>Get Your App Today</h2>

                <div style={{display:"flex"}}>
                <a href='#'> <img src='https://statics.olx.com.pk/external/base/img/appstore_2x.png' /> </a>
                <a href='#'> <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="android-app-store"/> </a>
                </div>
            </div>
        </div>

        </React.Fragment>
    );
}

