import { Container, Grid, IconButton, List, ListItemText, TextField, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';
import CarButton from '../../../StyleComponent/CarButton';
import { Box } from '@mui/system';
const useStyle = makeStyles({
    socialIcon: {
        color: '#E7C712 !important',
        border: '1px solid #19D3AE !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover': {
            background: '#E7C712 !important',
            color: '#000000 !important'
        }
    }
})

const footerBg = {
    color: 'white',
    background: `url("https://i.ibb.co/pdprFvx/letter-bg.png")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: '#1976d2',
    backgroundBlendMode: 'darken, luminosity'
}   

const Footer = () => {
    const { socialIcon } = useStyle();
    return (
        <footer style={footerBg}>
            <Container>
                <Grid container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ mt: 4, textAlign: 'center' }}>
                            <img style={{ width: '25%' }} src="https://i.ibb.co/kczXStZ/car.png" alt="" />
                            <ListItemText>SPEEDING ISSUES</ListItemText>
                            <Typography sx={{ textAlign: 'justify' }} variant="body1">We provide everything you need to buy, maintain or sell your car. We also specialize in Car morgages, Insurance, Registration, Modification, Reselling and Scraping.</Typography>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: 'white', mb: 1 }}>Recent Post</ListItemText>
                            <Box style={{ display: 'flex' }}>
                                <img style={{ width: '25%', marginRight: '10px' }} src="https://i.ibb.co/gRfcV3C/car-3.png" alt="" />
                                <Typography sx={{ textAlign: 'justify' }} variant="body1">Buy Your Dream Car <br /> Your Car is Here</Typography>
                            </Box>
                            <Box style={{ display: 'flex', margin: '10px auto' }}>
                                <img style={{ width: '25%', marginRight: '10px' }} src="https://i.ibb.co/JnBB6Bn/car-5.png" alt="" />
                                <Typography sx={{ textAlign: 'justify' }} variant="body1">How To Finance <br />Your Dream Car</Typography>
                            </Box>
                            <Box style={{ display: 'flex' }}>
                                <img style={{ width: '25%', marginRight: '10px' }} src="https://i.ibb.co/0Ch5ZBv/car-2.png" alt="" />
                                <Typography sx={{ textAlign: 'justify' }} variant="body1">At Home<br /> Car Servicing</Typography>
                            </Box>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: 'white', mb: 1 }}>Useful Link</ListItemText>
                            <ListItemText>Home</ListItemText>
                            <ListItemText>Cars</ListItemText>
                            <ListItemText>Contact</ListItemText>
                            <ListItemText>About</ListItemText>
                            <ListItemText>Blog</ListItemText>
                            <ListItemText>Login</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: 'white', mb: 1 }}>Our Location</ListItemText>
                            <ListItemText>Chandigarh - 160047  <br />sco-1,Car Market, Sector-47 </ListItemText>
                        </List>
                        <IconButton className={socialIcon}>
                            <GoogleIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <InstagramIcon />
                        </IconButton>
                        <form>
                            <TextField
                                label="Subscribe"
                                id="outlined-size-small"
                                size="small"
                                color="info"
                                focused
                                sx={{ mb: 2 }}
                            />
                            <CarButton variant="contained">Subscribe</CarButton>
                        </form>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', py: 4 }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by SPEEDING ISSUES Inc.</Typography>
            </Container>
        </footer>
    );
};

export default Footer;