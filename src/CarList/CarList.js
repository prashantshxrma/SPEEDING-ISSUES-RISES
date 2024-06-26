import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Grid, ImageListItemBar, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MuiButton from '../StyleComponent/MuiButton';

const itemData = [
    {
        img: 'https://i.ibb.co/3hYZHxN/car1.jpg',
        title: 'BMW M3',
        author: '@BMW',
    },
    {
        img: 'https://i.ibb.co/W5mpXVv/car2.jpg',
        title: 'Mercedes',
        author: '@mercedes',
    },
    {
        img: 'https://i.ibb.co/0yDzXmp/car3.jpg',
        title: 'Appolo v8 Car',
        author: '@APPOLO',
    },
    {
        img: 'https://i.ibb.co/MnqK5x4/car4.jpg',
        title: 'SM B 5006',
        author: '@SMB',
    },
    {
        img: 'https://i.ibb.co/GJRjJ8q/car5.jpg',
        title: 'Ferrari Enzo',
        author: '@FERRARI',
    },
    {
        img: 'https://i.ibb.co/YhVjKDh/car6.jpg',
        title: 'Bentley Bentayga',
        author: '@BENTLEY',
    },
    {
        img: 'https://i.ibb.co/D5tGT2M/car7.jpg',
        title: 'LariatLariat',
        author: '@tjdragotta',
    },
    {
        img: 'https://i.ibb.co/jbHHrHs/car8.jpg',
        title: 'Fern W3',
        author: '@fern',
    },
    {
        img: 'https://i.ibb.co/2sxJC65/car9.jpg',
        title: 'Toyota',
        author: '@TOYOTA',
    },
    {
        img: 'https://i.ibb.co/5kzWDL9/car10.jpg',
        title: 'Ford Motor',
        author: '@FORD',
    },
    {
        img: 'https://i.ibb.co/JH74RBf/car11.jpg',
        title: 'Daimler',
        author: '@peterlaster',
    },
    {
        img: 'https://i.ibb.co/G2SxM90/car12.jpg',
        title: 'Volkswagen',
        author: '@Volkswagen',
    },
];

const CarList = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={2} sx={{ mt: 15 }}>
                        <Typography style={{ fontWeight: 600 }} variant="h4" gutterBottom component="div">
                            FIND THE CAR<br /> THAT IGNITES YOUR SOUL
                        </Typography>
                        <Typography sx={{ fontWeight: 'light', mb: 2, fontSize: 15, textAlign: 'justify', width: '75%' }} variant="h6" component="div">
                        Welcome to Speeding Issues, where every ride tells a story! As passionate purveyors of premium vehicles, we specialize in matching drivers with their dream cars. With a curated selection spanning from sleek sedans to rugged SUVs, our showroom is a treasure trove for automotive enthusiasts. Experience unmatched quality, reliability, and style as you embark on your journey with us. Your perfect drive awaits, right here.
                        </Typography>
                        <Link to='/cars' style={{ textDecoration: 'none' }}><MuiButton>Explore Car</MuiButton></Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ImageList sx={{ width: 500, height: 450 }}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CarList;