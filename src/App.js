import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Productlist from "./components/productlist/Productlist";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext, ThemeProvider } from "./context";
import { useContext } from "react";

const App = () => {
  const theme = useContext(ThemeContext);
  console.log("theme",theme)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor:darkMode?"#222":"white",
      color:darkMode&&"white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <Productlist/>
      <Contact/>
      </div>
  );
}

export default App;
