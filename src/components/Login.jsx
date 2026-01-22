import { Box, Button, ButtonGroup, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material"
import logo from '../assets/images/logo.png'
import teacher from '../assets/images/Teacher.jpg'
import teacherXS from '../assets/images/TeacherMobile.jpg'
import admin from '../assets/images/Admin.jpg'
import adminXS from '../assets/images/AdminMobile.jpg'
import { COLORS } from "../assets/utils/colors"
import { InputField } from "../assets/utils/InputField"
import { ButtonX } from "../assets/utils/ButtonX"
import { useState } from "react"
import { CheckBox } from "../assets/utils/CheckBox"

export const Login = () => {
    const [role, setRole] = useState("teacher")
    const [username, setUsername] = useState('')
    const [password, SetPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const image = role === "teacher" ? teacher : admin
    const imageXS = role === "teacher" ? teacherXS : adminXS

    return (
        <Box sx={{ flexGrow: 1, position: 'relative' }}>
            <Box key={role} sx={{
                display: { lg: 'none', md: 'none', sm: 'block', xs: 'none' }, position: 'absolute',
                backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center',
                filter: 'blur(5px)', zIndex: 0, inset: 0, animation: 'fadeZoom 300ms ease-in-out'
            }}></Box>
            <Box key={role} sx={{
                display: { lg: 'none', md: 'none', sm: 'none', xs: 'block' }, position: 'absolute',
                backgroundImage: `url(${imageXS})`, backgroundSize: 'cover', backgroundPosition: 'center',
                filter: 'blur(5px)', zIndex: 0, inset: 0, animation: 'fadeZoom 300ms ease-in-out'
            }}></Box>
            <Grid container spacing={2} sx={{ zIndex: 1, position: 'relative' }}>
                <Grid size={6} sx={{
                    display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' },
                    alignItems: 'center', height: '100vh', overflow: 'hidden', m: 0, p: 0
                }}>
                    <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
                        <Box key={role} component="img" src={image} alt="Teacher Image" sx={{
                            objectFit: 'cover', width: '100%', height: '100%',
                            animation: 'fadeZoom 300ms ease-in-out'
                        }}></Box>
                    </Box>
                </Grid>
                <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card variant="outlined" sx={{
                            width: { lg: 400, md: 400, sm: 400, xs: 300 },
                            backgroundColor: COLORS.cardBg, border: `solid 2px ${COLORS.cardBorder}`, borderRadius: 5,
                            boxShadow: `0px 0px 8px 10px ${COLORS.shadow}`
                        }}>
                            <CardContent sx={{ pb: 0 }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid size={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Box component="img" src={logo} alt="Signup logo"
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
                                                            Tracking application
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid size={12} sx={{ pb: 2 }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                                <Box>
                                                    <Typography sx={{ color: COLORS.mutedText, fontWeight: 'bolder' }}>
                                                        Login as
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <ButtonGroup variant="contained" sx={{ boxShadow: `0px 6px 24px 0px ${COLORS.shadow}` }}>
                                                        <Button onClick={() => setRole("teacher")} sx={{
                                                            backgroundColor: role === "teacher" ? COLORS.accentHover : COLORS.primaryAccent,
                                                            color: role === "teacher" ? COLORS.primaryAccent : COLORS.primaryText, fontWeight: 'bold',
                                                            '&:hover': {
                                                                backgroundColor: COLORS.accentHover, color: COLORS.primaryAccent
                                                            }
                                                        }}>teacher</Button>
                                                        <Button onClick={() => setRole("admin")} sx={{
                                                            backgroundColor: role === "admin" ? COLORS.accentHover : COLORS.primaryAccent,
                                                            color: role === "admin" ? COLORS.primaryAccent : COLORS.primaryText, fontWeight: 'bold',
                                                            '&:hover': {
                                                                backgroundColor: COLORS.accentHover, color: COLORS.primaryAccent
                                                            }
                                                        }}>admin</Button>
                                                    </ButtonGroup>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid size={12}>
                                            <Box sx={{ width: '100%' }}>
                                                <InputField placeholder={"Username or email"} theme={COLORS} 
                                                value={username} onChange={(e) => setUsername(e.target.value)}/>
                                            </Box>
                                        </Grid>
                                        <Grid size={12}>
                                            <Box sx={{ width: '100%' }}>
                                                <InputField placeholder={"Password"} theme={COLORS} mode="password" 
                                                value={password} onChange={(e) => SetPassword(e.target.value)}/>
                                            </Box>
                                        </Grid>
                                        <Grid size={12}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <CheckBox theme={COLORS} /> Remember Me
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardContent><br />
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <ButtonX name="LOGIN" theme={COLORS} />
                            </CardActions>
                            <CardContent sx={{ pb: 0 }}>
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
                                    }}>Sign-Up</Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

