import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
// Add page imports here
import Home from './pages/Home';

const AuthenticatedApp = () => {


  



  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
        <Router>
          <AuthenticatedApp />
        </Router>
  )
}

export default App