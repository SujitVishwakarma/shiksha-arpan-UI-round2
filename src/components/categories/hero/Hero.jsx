import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import bg from '../../images/bg.webp';
import background from '../../images/background.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MainContainer = styled(Box)`
    display: flex;
    width: 100%;
    margin-left: 30px;
    margin-bottom: 95px;
`
const LeftContainer =  styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;
`
const SecondHeading = styled(Box)`
  display: flex;
  width: 90%;
`
const KeyPoints = styled(Box)`
  font-style: italic;
  & > p{
        font-size: 14px;
        color: #828282;
        margin-top: 10px;
      }
`
const ButtonIcon = styled(Box)`
  margin-top: 30px;
  width: 80%;
`
const ImageContainer = styled(Box)`
  margin-top: 80px;
`
const Hero = () => {
  return (
    <MainContainer>
        <LeftContainer>
            <Box component='h3' style={{marginTop:'120px'}}>WELOCOME TO <span style={{color:'blue'}}>SHIKSHA</span> <span style={{color:'red'}}>ARPAN</span></Box>
            <SecondHeading>
              <Box component='h4'> Become lifelong learners with India's best teachers,
              engaging video lessons and personalised learning journeys</Box>
            </SecondHeading>
            <Typography style={{fontSize: '16px', fontWeight: 600, width: '90%'}}>
              At SHIKSHA ARPAN, we leverage technology to merge best practices like use of videos, engaging content and quizzes with the best teachers so that every child across the globe has access to the best learning experiences.
            </Typography>
            <Typography style={{fontWeight: 600, marginTop:'15px'}}>Key features of the learning program:</Typography>
            <Box>
              <KeyPoints>- Interactive and engaging learning modules.</KeyPoints>
              <KeyPoints>- Visually rich content to enable conceptual clarity and lifelong term retention.</KeyPoints>
              <KeyPoints>- Personalised learning programs designed for every student, enabled by the power of data science.</KeyPoints>
            </Box>
            <ButtonIcon>
              <Button variant='contained'>GET STARTED NOW <PlayArrowIcon/></Button>
              <Button variant='contained' color='secondary' style={{marginLeft: '40px'}}>View courses <ArrowForwardIcon/></Button>
            </ButtonIcon>
        </LeftContainer>
        <ImageContainer>
          <img src={background} alt='' />
        </ImageContainer>
    </MainContainer>
  )
}

export default Hero
