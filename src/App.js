// Importing components
import Introduction from "./components/Introduction";
import Form from "./containers/Form/Form";
import Result from "./containers/Result/Result";

// Importing style
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Introduction />
      <Form />
      <Result />
    </div>
  );
}

export default App;
