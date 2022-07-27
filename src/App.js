import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './src/Pages/Home';
//import Index from './src/Pages/Index';
//import Show from './src/Pages/Show';

import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <h1>Hello!</h1>
          <Routes></Routes>
        </main>
      </Router>
    </div>
  );
}
export default App;
