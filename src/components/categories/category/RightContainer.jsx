import React from 'react'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import DevicesIcon from '@mui/icons-material/Devices';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LeftContainer from './LeftContainer';
import Footer from '../../footer/Footer';

const RightSide = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 20%;
    color: black;
    margin: 10px 20px 10px 40px; 
    
`
const Headstyled = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    padding: 5px;
`
const FirstContainer = styled(Box)`
    display: flex;
    margin-top: 20px;
  
`
const FirstContainerItem = styled(Box)`
    display: flex;
    padding: 2px;
    margin-top: 5px;
    margin-left: 10px;
    & > p{
        font-size: 18px;
        color: #828282;
        margin-left: 10px;
    }
`
const SecondContainerItem = styled(Box)`
    font-size: 18px;
    width: 80%;
    color: #828282;
    margin-left: 10px;
`
const IconBox = styled(Box)`
    display: flex;
    color: #D3D3D3;
`

const RightContainer = () => {
    return (
        <Box>
            <Box style={{display: 'flex'}}>
            <RightSide>
                <FirstContainer>
                    <Box style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '100%' }}>
                        <Headstyled>Categories</Headstyled>
                        <hr />
                        <FirstContainerItem>
                            <PsychologyAltOutlinedIcon />
                            <Typography style={{borderRadius: '30px', color: 'blue'}}>All Discussion</Typography>
                        </FirstContainerItem>
                        <FirstContainerItem>
                            <DevicesIcon />
                            <Typography>Live Contest/Classes</Typography>
                        </FirstContainerItem>
                        <FirstContainerItem>
                            <OndemandVideoIcon />
                            <Typography>Recorded Videos</Typography>
                        </FirstContainerItem>
                        <FirstContainerItem>
                            <PictureAsPdfIcon />
                            <Typography>PDF & Notes</Typography>
                        </FirstContainerItem>
                        <FirstContainerItem>
                            <QuestionMarkIcon />
                            <Typography>Q & A's</Typography>
                        </FirstContainerItem>
                    </Box>
                </FirstContainer>
                <FirstContainer>
                    <Box style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <Headstyled>Latest Discussion</Headstyled>
                        <hr />
                        <SecondContainerItem>
                            <Typography>How to get started with Shiksha Arpan ?.</Typography>
                            <IconBox>
                                <QuestionAnswerIcon />
                                <span>60 answers</span>
                            </IconBox>
                            <hr  style={{opacity: '30%'}}/>
                        </SecondContainerItem>
                        <SecondContainerItem>
                            <Typography>What will be the volume of 2 cylinder having unknown radius?.</Typography>
                            <IconBox>
                                <QuestionAnswerIcon />
                                <span>110 answers</span>
                            </IconBox>
                            <hr  style={{opacity: '30%'}}/>
                        </SecondContainerItem>
                        <SecondContainerItem>
                            <Typography>Which type of sample paper should we follow and how we can manage the time?.</Typography>
                            <IconBox>
                                <QuestionAnswerIcon />
                                <span>117 answers</span>
                            </IconBox>
                            <hr  style={{opacity: '30%'}}/>
                        </SecondContainerItem>
                    </Box>
                </FirstContainer>
            </RightSide>
            <Box style={{width: '70%'}}>
                <LeftContainer />
            </Box>
        </Box>
        <Box style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', color: '#828282', marginTop: '60px'}}>
            <Footer/>
        </Box>
        </Box>
        
    )
}

export default RightContainer
