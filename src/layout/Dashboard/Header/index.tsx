
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './header.css';
import UkFlagImage from "../../../assets/image/uk.png"

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&:before': {
            width: 8,
            height: 8,
            left: 12,
            borderRadius: '100%',
            backgroundColor: '#fff',
            border: '2px solid #7e7d7d'
        },
        '&:after': {
            right: 12,
            width: 6,
            height: 6,
            // left: 12,
            borderRadius: '100%',
            backgroundColor: 'blue',
            border: '2px solid #fff'
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
        color: '#343439',
    },
}));


function Header() {
    const [openManu, setOpenManu] = useState(false)

    return (
        <Fragment>
            <Stack className='headerWrap'>
                <AppBar position="fixed" color='transparent'>
                    <Stack className='container'>
                        <Toolbar>
                            <Stack className='left-manu'>
                                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                    {/* <MenuIcon /> */}
                                    <Typography variant="h4" sx={{ color: "#fff" }}>O</Typography>
                                </IconButton>
                            </Stack>
                            <Stack className='right-manu'>
                                <Box>
                                    <IconButton edge="end">
                                        <FormControlLabel
                                            control={<Android12Switch defaultChecked />}
                                            label=""
                                        />
                                    </IconButton>
                                    <Button variant="contained" sx={{ textTransform: "none", marginRight: "15px", borderRadius: "10px", backgroundColor: "#3265ff" }}>I'm  a photographer</Button>
                                    <Button variant="contained" sx={{ textTransform: "none", borderRadius: "10px", backgroundColor: "#3265ff" }}>I'm a partner</Button>
                                </Box>
                            </Stack>

                            <Stack className='show-mobile-manu'>
                                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                                    onClick={() => setOpenManu(!openManu)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Stack>

                        </Toolbar>
                    </Stack>
                </AppBar>
                {openManu &&
                    <Stack className='mobile-manu-item'>
                        <Stack className='top-mobile-manu'>
                            <Button variant="contained" sx={{ textTransform: "none", marginRight: "15px", borderRadius: "10px" }}>I'm  a photographer</Button>
                            <Button variant="contained" sx={{ textTransform: "none", borderRadius: "10px" }}>I'm a partner</Button>
                        </Stack>
                        <Stack className='bottom-mobile-manu'>
                            <IconButton edge="end">
                                <FormControlLabel
                                    control={<Android12Switch defaultChecked />}
                                    label=""
                                />
                            </IconButton>
                            <img
                                src={UkFlagImage}
                                alt=""
                                style={{
                                    width: "30px",
                                    height: "20px",
                                    objectFit: "fill",
                                }}
                            />
                        </Stack>
                    </Stack>
                }
            </Stack>

        </Fragment>
    );
}
export default Header;