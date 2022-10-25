import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./themes/default";
import "./App.css"
import Routing from "./routing/Routing";

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Routing/>
      </ThemeProvider>
    </>
  );
}

export default App;
