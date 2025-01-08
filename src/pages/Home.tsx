import { Box } from "@mui/material";

const Home = () => {



    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    width: '20%',
                    bgcolor: '#152259',
                }}
            >
                Logo
            </Box>

            <Box
                sx={{
                    width: '80%',
                    bgcolor: '#FFFFFF',
                }}
            >
                Pogo
            </Box>
        </Box>
    );
};

export default Home;
