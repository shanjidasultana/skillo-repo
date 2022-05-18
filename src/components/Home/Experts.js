import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Parallax ,ParallaxProvider } from 'react-scroll-parallax';
import heading from '../../../images/h1.png'

const Experts = () => {
    const [experts,setExperts]=useState([])
    useEffect(()=>{
        fetch('./experts.JSON')
        .then(res=>res.json())
        .then(data=>setExperts(data))
    },[])
    return (
        <ParallaxProvider>     
        <Container sx={{mt:11}}>
            <img src={heading}  alt="" srcset="" />
            <Typography sx={{borderBottom:5,borderColor:'primary.main'}} variant="h2">OUR EXPERT TEAM</Typography>
           
            <Box sx={{mb:8,mt:2,borderBottom:5,borderColor:'primary.main'}} ></Box>
        <Grid container spacing={2}>
           {
               experts.map(expert=><Grid key={expert.name} item xs={12} sm={6} md={4}>
                   <Card  data-aos="flip-right" 
                       data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" sx={{background:'black'}} >
                   <Parallax className="custom-class" tagOuter="figure">       
                   <CardMedia
                        component="img"
                        height="380"
                        image={expert.picture}
                        alt="green iguana"
                    />

                    </Parallax>
                    </Card>
                   </Grid>
                   )
           }     
        </Grid>
        </Container> 
    </ParallaxProvider>
        

    );
};

export default Experts;