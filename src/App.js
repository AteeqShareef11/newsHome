import { ThemeProvider } from "@mui/material";
import Home from './Pages/Home/index';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    textColors: {
      primary: "#313131",
      secondary: "#1580BE",
      paragraph: "#808080"
    },
    bgColors: {
      primary: "#313131",
      secondary: "#1580BE",
      white: "#ffffff"
    },
    borderColors: {
      gray: "#D3D3D3"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
