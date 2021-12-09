import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#B4B4FF'
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& fieldset': {
                        borderRadius: '50px',
                        boxShadow: '0 0 3px rgba(0,0,0,0.3)',
                    }
                }
            }
        }
    },
})

export default theme;