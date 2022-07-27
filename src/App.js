import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Index from './Pages/transactionIndex';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import New from './Pages/New';
import Error from './Pages/Error';

import NavBar from './Components/NavBar';

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
