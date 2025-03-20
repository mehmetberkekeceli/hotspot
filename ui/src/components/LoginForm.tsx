import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { validateUser } from "../services/authService";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [tcKimlikNo, setTcKimlikNo] = useState("");
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [dogumYili, setDogumYili] = useState("");
  const [showTc, setShowTc] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await validateUser(tcKimlikNo, ad, soyad, Number(dogumYili));
      dispatch(login());
      navigate("/dashboard");
    } catch (err) {
      setError("Kimlik doğrulama başarısız!");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 3,
          borderRadius: 3,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Hotspot Giriş
        </Typography>
        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="TC Kimlik No"
            variant="outlined"
            fullWidth
            margin="dense"
            value={tcKimlikNo}
            onChange={(e) => setTcKimlikNo(e.target.value)}
            required
            type={showTc ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowTc(!showTc)}>
                    {showTc ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Ad"
            variant="outlined"
            fullWidth
            margin="dense"
            value={ad}
            onChange={(e) => setAd(e.target.value)}
            required
          />
          <TextField
            label="Soyad"
            variant="outlined"
            fullWidth
            margin="dense"
            value={soyad}
            onChange={(e) => setSoyad(e.target.value)}
            required
          />
          <TextField
            label="Doğum Yılı"
            type="number"
            variant="outlined"
            fullWidth
            margin="dense"
            value={dogumYili}
            onChange={(e) => setDogumYili(e.target.value)}
            required
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Giriş Yap
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
