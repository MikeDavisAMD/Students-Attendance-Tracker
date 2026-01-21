import { Box, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material"
import LGMD_BG from '../assets/images/BackgroundLGMD.png'
import SM_BG from '../assets/images/BackgroundSM.jpg'
import XS_BG from '../assets/images/BackgroundXS.jpg'
import signup from '../assets/images/signup.png'
import { COLORS } from "../assets/utils/colors"
import { CheckBox } from "../assets/utils/CheckBox"
import { InputField } from "../assets/utils/InputField"
import { ButtonX } from "../assets/utils/ButtonX"

export const Signup = () => {
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
                            <CardContent sx={{ pb: 0 }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid size={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Box component="img" src={signup} alt="Signup logo"
                                                sx={{ height: { lg: 100, md: 100, sm: 80, xs: 60 }, width: { lg: 100, md: 100, sm: 80, xs: 60 } }}></Box>
                                        </Grid>
                                        <Grid size={7}>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container>
                                                    <Grid size={12}>
                                                        <Typography sx={{
                                                            fontWeight: 'bolder', fontStyle: 'italic', color: COLORS.primaryText,
                                                            fontSize: { lg: 40, md: 40, sm: 35, xs: 25 }, textAlign: 'center'
                                                        }}>
                                                            Sign-Up
                                                        </Typography>
                                                    </Grid>
                                                    <Grid size={12}>
                                                        <Typography sx={{
                                                            color: COLORS.secondaryText, textAlign: 'center',
                                                            fontSize: { lg: 18, md: 18, sm: 15, xs: 10 }
                                                        }}>
                                                            Only for Admins
                                                        </Typography>
                                                    </Grid>
                                                    <Grid size={12}>
                                                        <Typography sx={{
                                                            color: COLORS.secondaryText, textAlign: 'center',
                                                            fontSize: { lg: 15, md: 15, sm: 10, xs: 8 }
                                                        }}>
                                                            Only admins can add teachers
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid size={12}>
                                            <Box sx={{ width: '100%' }}>
                                                <InputField placeholder={"Username"} theme={COLORS} />
                                            </Box>
                                        </Grid>
                                        <Grid size={12}>
                                            <Box sx={{ width: '100%' }}>
                                                <InputField placeholder={"Email"} theme={COLORS} mode="email" />
                                            </Box>
                                        </Grid>
                                        <Grid size={12}>
                                            <Box sx={{ width: '100%' }}>
                                                <InputField placeholder={"Password"} theme={COLORS} mode="password" />
                                            </Box>
                                        </Grid>
                                        <Grid size={12}>
                                            <Box sx={{ width: '100%' }}>
                                                <InputField placeholder={"Confirm Password"} theme={COLORS} mode="password" />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <ButtonX name="LOGIN" theme={COLORS} />
                            </CardActions>
                            <CardContent>
                                <Box sx={{ textAlign: 'center', color: COLORS.secondaryText }}>
                                    Already have account? <Link href='/login' sx={{
                                        color: COLORS.primaryText, textDecoration: 'none',
                                        '&:hover': {
                                            cursor: 'pointer', color: COLORS.mutedText
                                        }
                                    }}>Login</Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}