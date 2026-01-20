import { Box, Grid } from "@mui/material"

export const Signup = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ lg: 6 }}>
                    Image
                </Grid>
                <Grid size={{ lg: 6 }}>
                    Form
                </Grid>
            </Grid>
        </Box>
    )
}
