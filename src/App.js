import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage.js'
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={NotesListPage} />
        <Route path="note/:id" component={NotesListPage} />
      </div>
    </Router>
  )


  // return (
  //   <div className="App">
  //     <Header />
  //     <NotesListPage />
  //   </div>
  // );
}

export default App;
