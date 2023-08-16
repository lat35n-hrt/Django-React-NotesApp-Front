import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage.js'

function App() {
  // return (
  //   <Router>
  //     <div className="App">
  //       <Header />
  //       <Route path="/" exact component={NotesListPage} />
  //     </div>
  //   </Router>
  // )


  return (
    <div className="App">
      <Header />
      <NotesListPage />
    </div>
  );
}

export default App;
