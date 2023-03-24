import { Box, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Fragment } from 'react'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import './home.css'
import Button from '@mui/material/Button';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

const InfoTootlTip = () => {
    return (
        <Fragment>
            <Stack className='info-tooltip'>
                <Stack className='info-image-contan'>
                    <Stack className='info-image'>
                        <img src={"https://picsum.photos/200"} alt="" />
                    </Stack>
                    <Stack className='info-text'>
                        <Typography variant='body1' sx={{ fontSize: '12px', color: "#6a7582" }}>Establishment</Typography>
                        <Typography variant='body1' sx={{ fontSize: '14px', color: "#bbbdc1" }}>Le Balajo</Typography>
                    </Stack>
                </Stack>
                <Stack className='info-arror'>
                    <ArrowForwardIosRoundedIcon />
                </Stack>
            </Stack>
            <Stack className='info-tooltip'>
                <Stack className='info-image-contan'>
                    <Stack className='info-image'>
                        <img src={"https://picsum.photos/200"} alt="" />
                    </Stack>
                    <Stack className='info-text'>
                        <Typography variant='body1' sx={{ fontSize: '12px', color: "#6a7582" }}>Sort by</Typography>
                        <Typography variant='body1' sx={{ fontSize: '14px', color: "#bbbdc1" }}>jamie Morris</Typography>
                    </Stack>
                </Stack>
                <Stack className='info-arror'>
                    <ArrowForwardIosRoundedIcon />
                </Stack>
            </Stack>
        </Fragment>

    )
}
const HomePage = () => {
    return (
        <Fragment>
            <Stack className='homeWrap'>
                <Stack className='container'>
                    <Stack className='banner-contan'>
                        <Typography variant='h2' sx={{ marginBottom: "2rem", fontWeight: "600" }}>
                            Soirees
                        </Typography>
                        <Typography variant='body1' sx={{ fontWeight: "600", color: "#d1d1d1" }}>
                            We capture the fun and protect your privacy.
                        </Typography>
                    </Stack>
                    <Stack className='banner-info-icon'>
                        <BootstrapTooltip title={<InfoTootlTip />}>
                            <InfoRoundedIcon />
                        </BootstrapTooltip>
                    </Stack>
                </Stack>
            </Stack>
            <Stack className='container'>
                <Stack className='find-my-pictures'>
                    <Stack className='find-left'>
                        <Typography variant='h3' sx={{ fontWeight: "600", color: "#fff" }}>
                            Find My Pictures
                        </Typography>
                    </Stack>
                    <Stack className='find-right'>
                        <Button variant='contained'>Go <ArrowForwardRoundedIcon /></Button>
                    </Stack>
                </Stack>
            </Stack>
        </Fragment>
    )
}

export default HomePage