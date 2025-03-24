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
import { validateUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import "./loginForm.scss";

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
    <Container className="container" maxWidth="xs">
      <Paper className="paper">
        <Typography variant="h5" className="title">
          Hotspot Giriş
        </Typography>
        {error && <Typography className="error">{error}</Typography>}
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
                  <IconButton
                    onClick={() => setShowTc(!showTc)}
                    className="iconButton"
                  >
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
          <Box>
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
