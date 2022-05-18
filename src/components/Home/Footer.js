import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons//WhatsApp';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TwitterIcon from '@material-ui/icons/Twitter';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link} from 'react-router-dom';
import footer from '../../images/headerlogo.png';
import React from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';

const Footer = () => {
    return (
     <Box sx={{bgcolor:'#969581'}}>  
        <Grid container spacing={2} sx={{bgcolor:'gray',mt:7,borderTop:6,borderBottom:6}}>
            <Grid item xs={12} md={4} sm={6} sx={{textAlign:'center',my:5}}>
                <Typography sx={{fontFamily: 'Cambo serif',color:"#ffc400",mb:3}} variant="h4">CONTACT</Typography>
                <Typography variant="h6" sx={{fontWeight:'bold',mx:'auto',my:1,color:'#b0bec5',fontFamily:'cursive'}}><AddLocationIcon style={{fontSize:37,color:"#5d4037"}}/>Walking Street, Los Angeles, California, BD</Typography>
                <Typography variant="h6" sx={{fontWeight:'bold',mx:'auto',my:1,color:'#b0bec5',fontFamily:'cursive'}}><LanguageIcon style={{fontSize:37,color:"#5d4037"}}/>info@skillochamp.com</Typography>
                <Typography variant="h6" sx={{fontWeight:'bold',mx:'auto',my:1,color:'#b0bec5',fontFamily:'cursive'}}><PhoneIcon style={{fontSize:37,color:"#5d4037"}}/>+00229031269</Typography>
                <Typography variant="h6" sx={{fontWeight:'bold',mx:'auto',my:1,color:'#b0bec5',fontFamily:'cursive'}}><PhoneAndroidIcon style={{fontSize:37,color:"#5d4037"}}/>+010126644</Typography>
               
            </Grid>
            <Grid item xs={12} md={4} sm={6} sx={{my:5}}>
                <Typography sx={{fontFamily: 'Cambo serif',color:"#ffc400",textAlign:'center',mb:3}} variant="h4">Our Terms Of Services</Typography>
                <Link to="/" sx={{color:'#afb42b',my:3,textDecoration:'none',fontSize:20,textAlign:'start',mx:'auto'}}><KeyboardTabIcon/>Our Services</Link><br/>
                <Link to="/" sx={{color:'#afb42b',my:3,textDecoration:'none',fontSize:20,textAlign:'start',mx:'auto'}}><KeyboardTabIcon/>Our Gerally</Link><br/>
                <Link to="/" sx={{color:'#afb42b',my:3,textDecoration:'none',fontSize:20,textAlign:'start',mx:'auto'}}><KeyboardTabIcon/>Course Guides</Link><br/>
                <Link to="/" sx={{color:'#afb42b',my:3,textDecoration:'none',fontSize:20,textAlign:'start',mx:'auto'}}><KeyboardTabIcon/>About Us</Link><br/>
                <Link to="/" sx={{color:'#afb42b',my:3,textDecoration:'none',fontSize:20,textAlign:'start',mx:'auto'}}><KeyboardTabIcon/>Latest News</Link><br/>
                <Link to="/" sx={{color:'#afb42b',my:3,textDecoration:'none',fontSize:20,textAlign:'start',mx:'auto'}}><KeyboardTabIcon/>Pricing & Terms</Link>
            </Grid>
            <Grid item xs={12} md={4} sm={6} sx={{textAlign:'center',my:5}}>
                <Typography sx={{fontFamily: 'Cambo serif',color:"#ffc400",mb:3}} variant="h4">Frequent Questions</Typography>
                <Typography variant="subtitle2" sx={{my:2,fontFamily: 'Cambria, Cochin, Georgia, Times, serif',fontSize:15,textAlign:'center',fontWeight:'bold',}}>How Can I get A course ?</Typography>
                <Typography variant="subtitle2" sx={{my:2,fontFamily: 'Cambria, Cochin, Georgia, Times, serif',fontSize:15,textAlign:'center',fontWeight:'bold',}}>Courses  Catalogue</Typography>
                <Typography variant="subtitle2" sx={{my:2,fontFamily: 'Cambria, Cochin, Georgia, Times, serif',fontSize:15,textAlign:'center',fontWeight:'bold',}}>Buy Course Help</Typography>
                <Typography variant="subtitle2" sx={{my:2,fontFamily: 'Cambria, Cochin, Georgia, Times, serif',fontSize:15,textAlign:'center',fontWeight:'bold',}}>What Course Do You Want?</Typography>

            </Grid>
        </Grid>
        <Paper sx={{mt:6,borderTop:6,p:4 }} elevation={4} >
            <img src={footer} alt="" srcset="" />
            <Typography variant='h4' sx={{mt:1,mb:5, fontSize:'42px',fontFamily: 'Cambria, Cochin, Georgia, Times, serif',textShadow:' 2px 5px 25px  #140975',color:'white'}} > SKILLo</Typography>
            <Box sx={{display:'flex',my:2, alignItems:'center',justifyContent:"center"}}>
            <Link to="/">   <FacebookIcon style={{fontSize:38, marginLeft :'20px',color:'cornflowerblue'}}/></Link> 
            <Link to="/"> <InstagramIcon style={{fontSize:38, marginLeft :'20px',color:'darkmagenta'}}/></Link> 
            <Link to="/"> <WhatsAppIcon style={{fontSize:38, marginLeft :'20px',color:'limegreen'}}/></Link> 
            <Link to="/"> <TwitterIcon style={{fontSize:38, marginLeft :'20px',color:'burlywood'}}/></Link> 
            <Link to="/"> <LinkedInIcon style={{fontSize:38, marginLeft :'20px',}}/></Link> 
            </Box>
            <Typography variant='subtitle1' sx={{mt:3,fontWeight:'bold',color:'#37474f'}}>Copyright © 2022 Skillo. All rights reserved.</Typography>
        </Paper>
       
        </Box>   
    );
};

export default Footer;