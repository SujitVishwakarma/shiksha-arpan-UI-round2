import { Box, Typography } from '@mui/material'
import React from 'react'
import profile from '../../components/images/profile.jpg'
import video1 from '../../components/images/class0.png'
import video2 from '../../components/images/class1.png'
import video3 from '../../components/images/class2.jpeg'
import pdf1 from '../../components/images/pdf1.png'
import book1 from '../../components/images/book1.jpg'
import book2 from '../../components/images/book2.jpg'
import book3 from '../../components/images/book3.jpg'
import book4 from '../../components/images/book4.jpg'
import book5 from '../../components/images/book5.jpg'
import achi1 from '../../components/images/achi1.jpg'

import styled from '@emotion/styled'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StoreIcon from '@mui/icons-material/Store';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import Footer from '../footer/Footer'

const MainContainer = styled(Box)`
    margin: 40px 10px 20px 30px;
    width: 100%;
    display: flex;
`
const LeftConatiner = styled(Box)`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 20%;
    height: 600px;

`
const FirstContainer = styled(Box)`
    display: flex;
    padding: 10px;
    margin-top: 10px;
`
const TextStyle = styled(Box)`
    margin-left: 10px;
    font-size: 18px;
`
const SecondLeftContainer = styled(Box)`
    margin-left: 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 15%;
    padding: 10px;
`
const TopContainer = styled(Box)`
    display:flex;
    justify-content: space-between;
`
const Addres = styled(Box)`
    margin-top: 30px;
    & > p{
        color: #828282;
        margin-left: 20px;
    }
`
const ThirdContainer = styled(Box)`
    margin-left: 30px;
   
    width: 55%;
`
const TFirst = styled(Box)`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 10px;
    height: 180px;
`
const TSecond = styled(Box)`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 20px 10px 20px 10px;
    height: 180px;
    
`
const Achivement = styled(Box)`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 20px 10px 20px 10px;
    height: 180px;
`
const Profile = () => {
  return (
    <Box style={{marginTop: '110px'}}>
        <MainContainer>
        <LeftConatiner>
            <FirstContainer>
                <DashboardOutlinedIcon/>
                <TextStyle color={'blue'}>Dashboard</TextStyle>
            </FirstContainer>
            <FirstContainer>
                <StoreIcon/>
                <TextStyle>Your Courses</TextStyle>
            </FirstContainer>
            <FirstContainer>
                <LeaderboardIcon/>
                <TextStyle>Leaderboard</TextStyle>
            </FirstContainer>
            <Box style={{margin: '320px 40px 20px 20px'}}>
                <img src={profile} alt='' style={{width: '50px', borderRadius: '50%'}}/>
                <Typography style={{textDecoration: 'underline', color: 'orange'}}>View profile</Typography>
            </Box>
        </LeftConatiner>
        <SecondLeftContainer>
            <Box>
                <TopContainer>
                    <img src={profile} alt='' style={{width: '50px', borderRadius: '50%'}}/>
                    <Box style={{marginRight: '20px', marginTop: '10px'}}>
                        <EditIcon/>
                        <ShareIcon/>
                    </Box>
                </TopContainer>
                <Typography style={{fontSize: '18px', padding: '10px 0 10 0'}}>Sujit</Typography>
            </Box>
            <Box>
                <Addres>
                    <Box>Personal Details :</Box>
                    <Box style={{display: 'flex', marginLeft: '10px'}}>
                        <Box>Name: </Box>
                        <Typography style={{marginLeft: '10px', color: '#828282'}}> Sujit Vishwakarma</Typography>
                    </Box>
                    <Box style={{display: 'flex', marginLeft: '10px'}}>
                        <Box>Father Name: </Box>
                        <Typography style={{marginLeft: '10px', color: '#828282'}}>N.Vishwakarma</Typography>
                    </Box>
                </Addres>
                <Addres>
                    <Box>Addres :</Box>
                    <Typography>Sankarpur - 204,</Typography>
                    <Typography>Nearby Badambadi Bus Stand,</Typography>
                    <Typography>Cuttack, Odisha </Typography>
                </Addres>
                <Addres>
                    <Box style={{display: 'flex'}}>
                        <Box>Mobile no: </Box>
                        <Typography style={{marginLeft: '10px', color: '#828282'}}> +91 2222226598</Typography>
                    </Box>
                </Addres>
                <Addres>
                    <Box style={{display: 'flex'}}>
                        <Box>Email ID: </Box>
                        <Typography style={{marginLeft: '10px', color: '#828282'}}> sujitv257@gmail.com</Typography>
                    </Box>
                </Addres>
                <Addres>
                    <Box style={{display: 'flex'}}>
                        <Box>Membership: </Box>
                        <Typography style={{marginLeft: '10px', color: '#828282'}}> elite +</Typography>
                    </Box>
                </Addres>
            </Box>
        </SecondLeftContainer>
        <ThirdContainer>
            <TFirst>
                <Box>
                    <Typography style={{marginLeft: '20px', fontWeight:600}}>Saved Videos</Typography>
                    <Box style={{display: 'flex'}}>
                        <img src={video1} alt='' style={{width: '220px'}}/>
                        <img src={video2} alt='' style={{width: '220px', marginLeft: '20px'}}/>
                        <img src={video3} alt='' style={{width: '220px', marginLeft: '30px'}}/>
                    </Box>
                </Box>
            </TFirst>
            <TSecond>
                <Box>
                    <Typography style={{marginLeft: '20px', fontWeight:600}}>Your saved Books & Notes</Typography>
                    <Box style={{display: 'flex', width: '95%'}}>
                        <img src={pdf1} alt='' style={{width: '150px', marginLeft: '20px'}}/>
                        <img src={book1} alt='' style={{width: '150px', marginLeft: '10px', height: '150px'}}/>
                        <img src={book2} alt='' style={{width: '150px', marginLeft: '10px', height: '150px'}}/>
                        <img src={book3} alt='' style={{width: '150px', marginLeft: '10px', height: '150px'}}/>
                        <img src={book5} alt='' style={{width: '150px', marginLeft: '10px', height: '150px'}}/>
                    </Box>
                </Box>
            </TSecond>
            <Achivement>
                <Box>
                    <Typography style={{marginLeft: '20px', fontWeight:600}}>Achivements</Typography>
                    <Box style={{display: 'flex'}}>
                        <img src={achi1} alt='' style={{width: '200px', height: '140px',marginLeft: '20px'}}/>
                    </Box>
                </Box>
            </Achivement>
        </ThirdContainer>
    </MainContainer>
    <Box>
        <Footer/>
    </Box>
    </Box>
  )
}

export default Profile
