import Todo from "./components/Todo";
import InlineComponent from "./components/InlineComponent";
import Header from "./components/Header";
import './App.css'
function App() {
  return <div className="App">
    {/* <InlineComponent></InlineComponent> */}
    <Header></Header>
    <Todo></Todo>
  </div>;
}

export default App;
