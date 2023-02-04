import "./App.css";
import Header from "./Header";
import Dropdown from "./Dropdown";
import Copyright from "./Copyright";
import NotesContainer from "./NotesContainer";
import Notes from "./Notes";

function App() {
  return (
    <div className="App">
      <Header />
      <Dropdown />
      <NotesContainer></NotesContainer>
      <br></br>
      <br></br>
      <Copyright />
    </div>
  );
}

export default App;
