import { Box, Card, CardActions, CardContent, Grid, Link, Typography } from "@mui/material"
import LGMD_BG from '../assets/images/BackgroundLGMD.png'
import SM_BG from '../assets/images/BackgroundSM.jpg'
import XS_BG from '../assets/images/BackgroundXS.jpg'
import password from '../assets/images/setpassword.png'
import { COLORS } from "../assets/utils/colors"
import { InputField } from "../assets/utils/InputField"
import { ButtonX } from "../assets/utils/ButtonX"

export const ForgotPassword = () => {
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
              <CardContent sx={{ pb: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid size={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <Box component="img" src={password} alt="Signup logo"
                        sx={{ height: { lg: 100, md: 100, sm: 80, xs: 50 }, width: { lg: 100, md: 100, sm: 80, xs: 50 } }}></Box>
                    </Grid>
                    <Grid size={8} sx={{display: 'flex', alignItems: 'center'}}>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container>
                          <Grid size={12}>
                            <Typography sx={{
                              fontWeight: 'bolder', fontStyle: 'italic', color: COLORS.primaryText,
                              fontSize: { lg: 26, md: 26, sm: 26, xs: 15 }
                            }}>
                              Change Password
                            </Typography>
                          </Grid>
                          <Grid size={12}>
                            <Typography sx={{
                              color: COLORS.secondaryText,
                              fontSize: { lg: 15, md: 15, sm: 15, xs: 10 }
                            }}>
                              Set a new password for your account
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid size={12}>
                      <Box sx={{ width: '100%' }}>
                        <InputField placeholder={"Username or Email"} theme={COLORS} />
                      </Box>
                    </Grid>
                    <Grid size={12}>
                      <Box sx={{ width: '100%' }}>
                        <InputField placeholder={"New Password"} theme={COLORS} mode="password" />
                      </Box>
                    </Grid>
                    <Grid size={12}>
                      <Box sx={{ width: '100%' }}>
                        <InputField placeholder={"Confirm New Password"} theme={COLORS} mode="password" />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonX name="CHANGE PASSWORD" theme={COLORS} />
              </CardActions><br />
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
