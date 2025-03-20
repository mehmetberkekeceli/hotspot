import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Üst Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hotspot Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Çıkış Yap
          </Button>
        </Toolbar>
      </AppBar>

      {/* Ana İçerik Alanı */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          Hoş Geldiniz! 🎉
        </Typography>

        {/* Dashboard Kartları */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Kullanıcı Bilgileri
                </Typography>
                <Typography sx={{ mt: 1 }} color="text.secondary">
                  Giriş yapmış kullanıcı bilgileri burada listelenir.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  İstatistikler 📊
                </Typography>
                <Typography sx={{ mt: 1 }} color="text.secondary">
                  Kullanıcı girişleri ve bağlantı verileri burada görüntülenir.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Bağlantı Durumu 🔄
                </Typography>
                <Typography sx={{ mt: 1 }} color="text.secondary">
                  Hotspot bağlantı durumu burada kontrol edilir.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
