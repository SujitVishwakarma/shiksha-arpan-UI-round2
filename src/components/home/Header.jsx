

import React from 'react'
import { AppBar, Box, Toolbar, InputBase, List, ListItem, Button } from '@mui/material'
import headerLogo from '../images/headLogo.png'
import styled from '@emotion/styled'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'
import Profile from '../profile/Profile';
import Body from '../categories/category/Body';

const NavLogo = styled(Box)`
    display: flex;
    align-items:center;
    & > p{
        align-items: center;
        
    }
    
`
const SearchContainer = styled(Box)`
  background: #fff;
  width: 30%;
  border-radius: 2px;
  margin-left: 40px;
  display: flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
`

const SearchWrapper = styled(Box)`
  color: blue;
  padding: 5px;
`
const ListStyled = styled(List)`
    display: flex;
    margin-left: 20px;
    font-size: 18px;
    font-weight: 600;
    & > div{
        text-decoration: none;
        color: #fff;
    
    }
`
const RightNav = styled(Box)`
    display: flex;
    margin-left: 160px;
    justify-content: space-between
`
const UserStyle = styled(Box)`
    margin-left: 40px;
    color: #e1e196;
`

const Header = () => {
    return (
        <AppBar position="fixed" style={{ background: '#4aa19a'}}>
            <Toolbar>
                <NavLogo>
                        <img src={headerLogo} alt='navlogo' style={{ maxHeight: '40px', marginLeft: '40px' }} />
                        <span style={{ color: 'blue', fontWeight: '600', fontSize: '24px', marginLeft: '10px' }}>शिक्षा</span>
                        <span style={{ color: 'red', fontWeight: '600', fontSize: '24px' }}> अर्पण</span>
                </NavLogo>
                <SearchContainer maxWidth="sm">
                    <InputSearchBase
                        placeholder='Search for any course'
                    />
                    <SearchWrapper>
                        <SearchIcon />
                    </SearchWrapper>
                </SearchContainer>
                <ListStyled>
                    <ListItem >
                        <Link to={'/'} style={{textDecoration: 'none', color: '#fff'}}>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'Profile'} style={{textDecoration: 'none', color: '#fff'}}>Profile</Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'Body'} style={{textDecoration: 'none', color: '#fff'}}>Discussion</Link>
                    </ListItem>
                </ListStyled>
                <RightNav>
                    <Button variant='contained'>Learn More</Button>
                    <UserStyle>
                        <Link to={'/profile'} style={{textDecoration: 'none', color: '#fff'}}><AccountCircleIcon style={{fontSize: '35px'}}/></Link>
                    </UserStyle>
                </RightNav>
            </Toolbar>
        </AppBar>
    )
}

export default Header
