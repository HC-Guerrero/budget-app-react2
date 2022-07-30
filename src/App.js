import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/transactionIndex';
import Show from './pages/Show';
import Edit from './pages/Edit';
import New from './pages/New';
import Error from './pages/Error';

import NavBar from './components/navBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/transactions' element={<Index />} />
            <Route path='/transactions/new' element={<New />} />
            <Route path='/transactions/:index' element={<Show />} />
            <Route path='/transactions/:index/edit' element={<Edit />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
export default App;
