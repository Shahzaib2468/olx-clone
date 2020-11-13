import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
                    <Card>
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/ofj2roe2vwqa2-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 10,00000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               KIA
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/7s85ch6unfie-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 10,00000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Swift
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/t2o7uekpzf9s3-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 18,00000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Corolla
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/ovhjg869aavg-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,0000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               RED Car
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
                            src="https://apollo-singapore.akamaized.net/v1/files/whvljv2bhp5j1-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 16,00</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Swing
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/h0792ferx08g1-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 20,000000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               House
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/ugfeekcir34h2-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 1000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Machines
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
                            <h3>Rs 22,0000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Laptop
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
                            src="https://apollo-singapore.akamaized.net/v1/files/6zr4zuqo8jfz2-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 1600</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Kurti
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/yycfj7qtl6461-PK/image;s=300x600;q=60"

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
                            src="https://apollo-singapore.akamaized.net/v1/files/x24dlumvgvff2-PK/image;s=300x600;q=60"
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
                            src="https://apollo-singapore.akamaized.net/v1/files/rhonvm1kcs19-PK/image;s=300x600;q=60"
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
                            src="https://apollo-singapore.akamaized.net/v1/files/7bfoecqfery72-PK/image;s=300x600;q=60"
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
                            src="https://apollo-singapore.akamaized.net/v1/files/ovhjg869aavg-PK/image;s=300x600;q=60"

                            />
                            <h3>Rs 19,00000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Red Car
                        </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid>

                <Grid item sm={3}>
                     <Card >
                        <CardContent>
                            <img
                            src="https://apollo-singapore.akamaized.net/v1/files/u7lranmjo8cb-PK/image;s=300x600;q=60"
                            />
                            <h3>Rs 18,0000</h3>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               White Car
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

