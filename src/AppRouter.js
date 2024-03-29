import React from 'react'
import './App.scss';
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route, Link, Switch, } from 'react-router-dom';
import AmericanSaoa from './components/states/AmericanSaoa';
import Header from './components/Header';
import Footer from './components/Footer'
function AppRouter() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/landing" element={<LandingPage />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/landing/:id" element={<AmericanSaoa />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    )
}

export default AppRouter