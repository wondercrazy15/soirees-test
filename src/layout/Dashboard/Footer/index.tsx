import { Box, Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import UkFlagImage from "../../../assets/image/uk.png"
import './footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {

    return (
        <Stack className="footer">
            <Stack className="container">
                <Box>
                    <Box
                        display={"flex"}
                        alignItems="center"
                        justifyContent={"space-between"}
                        color="hsl(240deg 3.31% 52.55%)"
                    >
                        <Box
                            display={"flex"}
                            alignItems="center"
                            justifyContent={"flex-start"}
                            textAlign="start"

                        >
                            <Typography variant="h4" sx={{ color: "#fff" }}>O</Typography>
                            <Box
                                marginLeft={"20px"}
                            >
                                <Typography variant="body1">Soirees</Typography>
                                <Typography variant="body1">From Paris with &#x1F493;</Typography>
                            </Box>
                        </Box>
                        <Box
                            display={"flex"}
                            alignItems="center"
                            justifyContent={"flex-start"}
                            color="hsl(240deg 3.31% 52.55%)"
                        >
                            <Typography variant="body1" sx={{ color: "#d5dbdf" }}>Partner login</Typography>
                            <Typography variant="body1" sx={{ marginLeft: "15px" }} className="ukFlag">
                                <img
                                    src={UkFlagImage}
                                    alt=""
                                    style={{
                                        width: "30px",
                                        height: "20px",
                                        objectFit: "fill",
                                    }}
                                />
                            </Typography>
                        </Box>
                    </Box>
                    <Stack className="copy-right-div">
                        {/* <Stack
                           className=""
                        > */}
                        <Typography>
                            © soire.es All rights reserved.
                        </Typography>
                        <Typography>
                            Terms Privacy Plolicy
                        </Typography>
                        <Stack
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                            className="social-icons"
                        >
                            <Box sx={{
                                background: "#2e2e32",
                                borderRadius: "50%",
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '30px',
                                height: '30px',
                                marginRight: "15px",
                            }}>
                                <TwitterIcon />
                            </Box>
                            <Box sx={{
                                background: "#2e2e32",
                                borderRadius: "50%",
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '30px',
                                height: '30px',
                                marginRight: "15px",
                            }}>
                                <GitHubIcon />
                            </Box>
                            <Box sx={{
                                background: "#2e2e32",
                                borderRadius: "50%",
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '30px',
                                height: '30px',
                                marginRight: "15px",
                            }}>
                                <FacebookIcon />
                            </Box>
                            <Box sx={{
                                background: "#2e2e32",
                                borderRadius: "50%",
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '30px',
                                height: '30px',
                                marginRight: "15px",
                            }}>
                                <InstagramIcon />
                            </Box>
                            <Box sx={{
                                background: "#2e2e32",
                                borderRadius: "50%",
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '30px',
                                height: '30px',
                            }}>
                                <LinkedInIcon />
                            </Box>
                        </Stack>
                        {/* </Stack> */}
                    </Stack>
                </Box >
            </Stack>

        </Stack>
    )
}

export default Footer