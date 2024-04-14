import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CaseDetails from './components/CaseDetails';
import ErrorComponent from './components/ErrorComponent';
import SearchResults from './components/SearchResults';
import SubmitCaseForm from './components/SubmitCaseForm';
import HomePage from './components/HomePage';  // Import the HomePage component
import Header from './components/Header'; // Import the Header component
import './tailwind.css'; // Path to your Tailwind CSS file

function App() {
    return (
        <Router>
          <div>
            <Header /> {/* Include the Header component */}
            <Routes>
                <Route path="/" element={<HomePage />} />  // Route for the homepage
                <Route path="/case-details" element={<CaseDetails />} />
                <Route path="/error" element={<ErrorComponent />} />
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="/submit-case" element={<SubmitCaseForm />} />
            </Routes>
          </div>  
        </Router>
    );
}

export default App;
