import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import MuiButton from '../../../StyleComponent/MuiButton';
import Typical from 'react-typical';


const Banner = () => {

    return (
        <div style={{ minHeight: 500, height: '100vh', display: 'flex', alignItems: 'center',backgroundColor:'#84A98C' }}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <Box>
                            <Typography variant='h3' sx={{ fontWeight: 700, }}>
                                AUTOMOBILE
                                <Typical
                                    steps={['Manufacturer!', 2000, 'Seller!', 2000, 'Modifier!', 2000]}
                                    loop={Infinity}
                                    wrapper="div"
                                />
                            </Typography>

                            <Typography sx={{ fontWeight: 'light', mb: 2, fontSize: 15, textAlign: 'justify', width: '75%' }} variant="h6" component="div">
                            Step into the realm of automotive excellence at our dealership, where innovation meets luxury on every mile of the road. Our collection boasts the finest selection of vehicles crafted to elevate your driving experience. From cutting-edge technology to timeless elegance, we pride ourselves on delivering top-tier automobiles tailored to your preferences. Let us guide you towards your automotive aspirations and redefine the way you traverse the open road.
                            </Typography>
                            <Link to='/cars' style={{ textDecoration: 'none' }}><MuiButton>Explore Car</MuiButton></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img style={{ width: '100%' }} src="https://i.ibb.co/XD2QWwk/home-img.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;