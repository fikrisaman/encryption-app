// Importing components
import Introduction from "./components/Introduction";
import Form from "./containers/Form/Form";
import Result from "./containers/Result/Result";

// Importing style
import classes from "./App.module.css";

// Importing components
import InfoBox from "./components/UI/InfoBox/InfoBox";
import Aux from "./hoc/Auxiliary";

function App() {
  return (
    <Aux>
      <InfoBox />
      <div className={classes.App}>
        <Introduction />
        <Form />
        <Result />
      </div>
    </Aux>
  );
}

export default App;
