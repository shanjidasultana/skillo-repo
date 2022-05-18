
import { Box, Card, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Image, ImageGroup } from 'react-fullscreen-image';
// import ReadMoreReact from 'read-more-react';
// import Booking from '../../Booking/Booking';

const Services = () => {
    // const [booking,setBooking]=useState({})
    //     const [openBooking, setBookingOpen] = React.useState(false);
    //     const handleBookingOpen = () => setBookingOpen(true);
    //     const handleBookingClose = () => setBookingOpen(false);

        const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <>
        {/* <img src={heading2} alt="" style={{marginTop :'60px'}} srcset="" /> */}
        <Box sx={{mt:2,mx:'auto',borderBottom:3,borderColor:'lightblue',width:2/7,}} ></Box>
        <Box sx={{mt:2,mx:'auto',borderBottom:3,borderColor:'primary.main',width:3/7,}} ></Box>
        <Typography variant="h2" sx={{mt:0}} >OUR Services</Typography>
         <Box sx={{mt:2,mx:'auto',borderBottom:3,borderColor:'lightblue',width:3/7}} ></Box>
        <Box sx={{my:2,mx:'auto',borderBottom:3,borderColor:'primary.main',width:2/7,}} ></Box>
        {/* <img src={heading2} alt="" style={{marginBottom :'60px'}} srcset="" /> */}
       
        <Grid container spacing={2}>
                {
                    services.map(service=> <Grid data-aos="zoom-in-down" data-aos-duration="2000" data-aos-offset="300"  data-aos-easing="linear" key={service.name}  item xs={12} sm={6} md={4}>
                          
                        <Card sx={{height:'400px',bgcolor:'#b4bdbf',color:'white'}}>
                            <Typography sx={{mt:3,fontFamily: 'Cambo serif',}} component="div" variant="h4">
                                        {service.name}
                             </Typography>
                             <Typography variant="subtitle1" color="text.secondary" sx={{fontWeight:'bold',fontsize:20}}component="div">
                                 ${service.price}
                             </Typography>
                             <img src={service.picture} alt="" srcset="" />
                        <ImageGroup>

                                <Image
                                src={service.picture}
                                alt="nature"
                                style={{border:'10px solid white',}}
                                />
                        </ImageGroup>
                        
                                    
                        </Card>
                        <Box  sx={{bgcolor:'#b4bdbf',px:2,color:'black',}}>
                        <Typography  variant="subtitle1" color="text.secondary" sx={{cursor: "pointer",}} component="div">
                                            
                                            {/* <ReadMoreReact
                                             text={service.details}
                                                min={80}
                                                ideal={100}
                                                max={120}
                                                readMoreText="READ MORE"/> */}
                        </Typography>
                        {/* <Button onClick={handleBookingOpen}   sx={{ bgcolor:'black',cursor: "pointer",color:'white'}} >Book Now</Button> */}
                        </Box>
                                
                        
                        

            </Grid>
                       
                    )
                }

        </Grid>
        {/* <Booking  booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
               >

        </Booking> */}
        </> 

    );
};

export default Services;