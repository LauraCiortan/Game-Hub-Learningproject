import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          margin: 0,
          boxShadow: "none",
        },
      },
    },
    MuiGrid2: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid xs={12} md={12}>
            <Item>Nav</Item>
          </Grid>
          <Grid xs={6} md={4} sx={{ display: { xs: "none", md: "block" } }}>
            <Item>Aside</Item>
          </Grid>
          <Grid xs={6} md={8} sx={{ width: "100%", height: "100%" }}>
            <Item>Main</Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
