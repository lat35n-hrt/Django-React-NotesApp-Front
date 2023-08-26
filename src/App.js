import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage.js';
import NotePage from "./pages/NotePage";

function App() {

  let noteId = match.params.id

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div> 
    </Router>
  )
}

export default App;
