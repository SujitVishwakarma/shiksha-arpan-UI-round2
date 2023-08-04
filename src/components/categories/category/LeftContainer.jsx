import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import profile1 from '../../images/profile1.png'
import bannerImg2 from '../../images/bannerImg2.png'
import p2 from '../../images/p2.jpg'


const FirstNav = styled(Box)`
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 30px;
    & > div{
        padding: 10px;
        color: #000;
        font-size: 20px;
        font-weight: 600;
        font-style: bold;
        margin-left: 20px;
    },
    & > button{
      padding: 10px;
      margin: 6px;
      font-size: 10px;
      margin-right: 20px;
      background: hsl(38.82deg 100% 50%);
      font-weight: 600;
      border-radius: 20px;
    }
`
const SecondNav = styled(Box)`
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 10px;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
  & > p{
    margin-left: 20px;
    color: #828282;
    font-weight: 600;
  },
  & > button{
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 30px;
  }

`
const SecondContainer = styled(Box)`
  color: black;
  display: flex;
  margin-top: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`
const LowerBox = styled(Box)`
  display: flex;
  width: 90%;
  margin-bottom: 10px;
`
const Question = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 10px 10px 1px 20px;
`
const LikeDislike = styled(Box)`
  display: flex;
  width: 10%;
  justify-content: space-between;
  align-items: center;

`
const Like = styled(Box)`
  display: flex;
  margin-left: 20px;
  color: #828282;
  margin-top: 20px;
  align-items: center;
  & > p{
    font-size: 14px;
    margin-left: 5px;
  }
`
const DisLike = styled(Box)`
  display: flex;
  margin-left: 20px;
  color: #828282;
  margin-top: 20px;
  align-items: center;
  & > p{
    font-size: 14px;
    margin-left: 5px;
  }
`
const AnswerViews = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Answer = styled(Box)`
  display: flex;
  margin-left: 456px;
  color: #828282;
  align-items: center;
  & > p{
    font-size: 14px;
    margin-left: 5px;
  }

`
const View = styled(Box)`
  display: flex;
  margin-left: 16px;
  color: #828282;
  align-items: center;
  & > p{
    font-size: 14px;
    margin-left: 5px;
  }

`
const LeftContainer = () => {
  return (
    <Box style={{ marginTop: '30px', width: '100%' }}>
      <FirstNav>
        <Box>All Discussion</Box>
        <Button variant='contained'>Ask Question</Button>
      </FirstNav>
      <SecondNav>
        <Typography>350 questions</Typography>
        <Button>Newest</Button>
        <Button variant='contained'>Popular</Button>
        <Button>Unanswered</Button>
      </SecondNav>

      {/* FirstContainer */}
      <SecondContainer>
        <Box>
          <img src={profile1} alt='' style={{ width: '50px', alignItems: 'center', marginTop: '10px' }} />
        </Box>
        <Box style={{ width: '90%' }}>
          <Question>
            <Box style={{ width: '80%', fontSize: '16px', fontWeight: '600' }}>
              How can be the area of triangle can be calculate, if only hypotenous value is given ?.
            </Box>
            <Typography style={{ color: '#828282' }}>2 days ago</Typography>
          </Question>
          <Typography style={{ marginLeft: '20px', fontSize: '12px', color: 'blue', fontWeight: 500 }}>Sima Mohapatra</Typography>
          <LowerBox >
            <LikeDislike>
              <Like>
                <ThumbUpOutlinedIcon style={{ fontSize: '16px', color: 'blue' }} />
                <Typography> 16</Typography>
              </Like>
              <DisLike>
                <ThumbDownOffAltOutlinedIcon style={{ fontSize: '16px', }} />
                <Typography> 0</Typography>
              </DisLike>
            </LikeDislike>
            <AnswerViews>
              <Answer>
                <QuestionAnswerIcon />
                <Typography>120 answers</Typography>
              </Answer>
              <View>
                <VisibilityIcon />
                <Typography>160 Views</Typography>
              </View>
          </AnswerViews>
          </LowerBox>
        </Box>

      </SecondContainer>
      {/* SecondContainer */}
      <SecondContainer>
        <Box>
          <img src={profile1} alt='' style={{ width: '50px' }} />
        </Box>
        <Box style={{ width: '90%' }}>
          <Question>
            <Box style={{ width: '80%', fontSize: '16px', fontWeight: '600' }}>
              Can we say that the total surface area of cuboid = lateral surface area + 2 x area of base ?.
            </Box>
            <Typography style={{ color: '#828282' }}>5 days ago</Typography>
          </Question>
          <Typography style={{ marginLeft: '20px', fontSize: '12px', color: 'blue', fontWeight: 500 }}>Rima singh</Typography>
          <LowerBox >
            <LikeDislike>
              <Like>
                <ThumbUpOutlinedIcon style={{ fontSize: '16px', color: 'blue' }} />
                <Typography> 34</Typography>
              </Like>
              <DisLike>
                <ThumbDownOffAltOutlinedIcon style={{ fontSize: '16px', }} />
                <Typography> 2</Typography>
              </DisLike>
            </LikeDislike>
            <AnswerViews>
              <Answer>
                <QuestionAnswerIcon />
                <Typography>52 answers</Typography>
              </Answer>
              <View>
                <VisibilityIcon />
                <Typography>140 Views</Typography>
              </View>
          </AnswerViews>
          </LowerBox>
        </Box>
      </SecondContainer>

      {/* ThirdContainer */}
      <SecondContainer>
        <Box>
          <img src={bannerImg2} alt='' style={{ width: '50px' }} />
        </Box>
        <Box style={{ width: '90%' }}>
          <Question>
            <Box style={{ width: '80%', fontSize: '16px', fontWeight: '600' }}>
              Find the amount and the compound intrest on Rs 10,000 for 1*1/2 years at 10% per annum, compound half yearly. Would this intrest be more than intrest he would get if it was compounded annually ?.
            </Box>
            <Typography style={{ color: '#828282' }}>22 hours ago</Typography>
          </Question>
          <Typography style={{ marginLeft: '20px', fontSize: '12px', color: 'blue', fontWeight: 500 }}>sujit vishwakarma</Typography>
          <LowerBox >
            <LikeDislike>
              <Like>
                <ThumbUpOutlinedIcon style={{ fontSize: '16px', color: 'blue' }} />
                <Typography> 56</Typography>
              </Like>
              <DisLike>
                <ThumbDownOffAltOutlinedIcon style={{ fontSize: '16px', }} />
                <Typography> 1</Typography>
              </DisLike>
            </LikeDislike>
            <AnswerViews>
              <Answer>
                <QuestionAnswerIcon />
                <Typography>150 answers</Typography>
              </Answer>
              <View>
                <VisibilityIcon />
                <Typography>250 Views</Typography>
              </View>
          </AnswerViews>
          </LowerBox>
        </Box>
      </SecondContainer>
      {/* fourthContainer */}
      <SecondContainer>
        <Box>
          <img src={profile1} alt='' style={{ width: '50px' }} />
        </Box>
        <Box style={{ width: '90%' }}>
          <Question>
            <Box style={{ width: '80%', fontSize: '16px', fontWeight: '600' }}>
              A shopkeeper purchased 200 bulbs for Rs.10 each . However 5 bulbs were fused adn had to be thrown away. The remaining were sold at Rs 12 each. Find the gain or loss % . 
            </Box>
            <Typography style={{ color: '#828282' }}>6 hours ago</Typography>
          </Question>
          <Typography style={{ marginLeft: '20px', fontSize: '12px', color: 'blue', fontWeight: 500 }}>Monalisha Taldi</Typography>
          <LowerBox >
            <LikeDislike>
              <Like>
                <ThumbUpOutlinedIcon style={{ fontSize: '16px', color: 'blue' }} />
                <Typography> 26</Typography>
              </Like>
              <DisLike>
                <ThumbDownOffAltOutlinedIcon style={{ fontSize: '16px', }} />
                <Typography> 5</Typography>
              </DisLike>
            </LikeDislike>
            <AnswerViews>
              <Answer>
                <QuestionAnswerIcon />
                <Typography>90 answers</Typography>
              </Answer>
              <View>
                <VisibilityIcon />
                <Typography>130 answers</Typography>
              </View>
          </AnswerViews>
          </LowerBox>
        </Box>
      </SecondContainer>
    </Box>
  )
}

export default LeftContainer
