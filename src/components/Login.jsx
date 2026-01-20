import { Box, Button, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material"
import LGMD_BG from '../assets/images/BackgroundLGMD.png'
import SM_BG from '../assets/images/BackgroundSM.jpg'
import XS_BG from '../assets/images/BackgroundXS.jpg'
import logo from '../assets/images/logo.png'
import { COLORS } from "../assets/utils/colors"
import { RememberButtonUI } from "../assets/utils/RememberButtonUI"

export const Login = () => {
    return (
        <Box sx={{ flexGrow: 1, position: 'relative' }}>
            <Box sx={{
                display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' }, position: 'absolute',
                backgroundImage: `url(${LGMD_BG})`, backgroundSize: 'cover', backgroundPosition: 'center',
                filter: 'blur(5px)', zIndex: 0, inset: 0
            }}></Box>
            <Box sx={{
                display: { lg: 'none', md: 'none', sm: 'block', xs: 'none' }, position: 'absolute',
                backgroundImage: `url(${SM_BG})`, backgroundSize: 'cover', backgroundPosition: 'center',
                filter: 'blur(5px)', zIndex: 0, inset: 0
            }}></Box>
            <Box sx={{
                display: { lg: 'none', md: 'none', sm: 'none', xs: 'block' }, position: 'absolute',
                backgroundImage: `url(${XS_BG})`, backgroundSize: 'cover', backgroundPosition: 'center',
                filter: 'blur(5px)', zIndex: 0, inset: 0
            }}></Box>
            <Grid container spacing={2} sx={{ zIndex: 1, position: 'relative' }}>
                <Grid size={12}>
                    <Box sx={{ height: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Card variant="outlined" sx={{
                            width: { lg: 400, md: 400, sm: 400, xs: 300 },
                            backgroundColor: COLORS.cardBg, border: `solid 2px ${COLORS.cardBorder}`, borderRadius: 5,
                            boxShadow: `0px 0px 8px 10px ${COLORS.shadow}`
                        }}>
                            <CardContent>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid size={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Box component="img" src={logo} alt="Student Attendance app logo"
                                                sx={{ height: { lg: 100, md: 100, sm: 80, xs: 60 }, width: { lg: 100, md: 100, sm: 80, xs: 60 } }}></Box>
                                        </Grid>
                                        <Grid size={8}>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container>
                                                    <Grid size={12}>
                                                        <Typography sx={{
                                                            fontWeight: 'bolder', fontStyle: 'italic', color: COLORS.primaryText,
                                                            fontSize: { lg: 40, md: 40, sm: 35, xs: 25 }, textAlign: 'center'
                                                        }}>
                                                            Attendance
                                                        </Typography>
                                                    </Grid>
                                                    <Grid size={12}>
                                                        <Typography sx={{
                                                            color: COLORS.secondaryText, textAlign: 'center',
                                                            fontSize: { lg: 20, md: 20, sm: 18, xs: 15 }
                                                        }}>
                                                            Tracking Application
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid size={12}>
                                            <Box sx={{ display: 'flex' }}>
                                                <RememberButtonUI /> Remember Me
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" sx={{
                                    backgroundColor: COLORS.primaryAccent, color: COLORS.primaryText,
                                    '&:hover': {
                                        backgroundColor: COLORS.accentHover,
                                        color: COLORS.primaryAccent
                                    }
                                }}>Login</Button>
                            </CardActions><br />
                            <CardContent>
                                <Box sx={{ textAlign: 'center', color: COLORS.secondaryText }}>
                                    Forgot Password? No Worries <Link href="/forgot-password" sx={{
                                        color: COLORS.primaryText, textDecoration: 'none',
                                        '&:hover': {
                                            cursor: 'pointer', color: COLORS.mutedText
                                        }
                                    }}>Click Here</Link>
                                </Box>
                            </CardContent>
                            <CardContent>
                                <Box sx={{ textAlign: 'center', color: COLORS.secondaryText }}>
                                    New to this application? <Link href='/signup' sx={{
                                        color: COLORS.primaryText, textDecoration: 'none',
                                        '&:hover': {
                                            cursor: 'pointer', color: COLORS.mutedText
                                        }
                                    }}>Sign Up</Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
