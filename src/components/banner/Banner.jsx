import React from 'react'
import { Box} from '@mui/material'
import banner from '../images/Banner.png'
import styled from '@emotion/styled'

const MainConatiner = styled(Box)`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 125px 20px 30px 20px;
`
const Banner = () => {
  return (
    <MainConatiner>
        <img src={banner} alt=''  style={{width: '95%', marginLeft: '30px', height: '190px'}}/>
    </MainConatiner>
  )
}

export default Banner
