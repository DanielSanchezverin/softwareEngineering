import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./themes/default";
import "./App.css"

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
