import {
  BrowserRouter as Router, Routes, Route
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
        <Routes>
          <Route path="/" exact component={NotesListPage} />
          <Route path="note/:id" component={NotePage} />
        </Routes>
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
