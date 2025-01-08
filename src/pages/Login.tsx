import { Box, Button, CircularProgress, Container, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { customAxios } from "../hooks/customAxios";
import { AuthContext } from "../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const payload = {
            usernameoremail: email,
            password: password
        }
        setIsLoading(true);
        customAxios.post('/login', payload)
            .then(res => setUser(res.data))
            .catch(error => toast.error(error?.response?.data?.message))
            .finally(() => setIsLoading(false));
        navigate('/', { replace: true });
    }

    return (
        <Container maxWidth='xs'>
            <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{
                    mt: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <Typography variant="h4" component="h1" align="center">
                    Login
                </Typography>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    {isLoading ? <CircularProgress size={26} sx={{ color: 'white' }} /> : 'Sign In'}
                </Button>
                <Toaster position="top-right" />
            </Box>
        </Container>
    )
}

export default Login