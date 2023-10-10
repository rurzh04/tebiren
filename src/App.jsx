import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './page/home';
import Profile from './page/profile';

import { Header } from './compenents/Header/';
import { Sidebar } from './scenes/global/Sidebar';

import './app.scss';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <Router>
            <div className="app">
                <Header />
                <main className="main">
                    <div className="container">
                        <div className="tebirenContent">
                            <Sidebar />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/profile" element={<Profile />} />
                                {/* <Route path="/account/:id" element={<Person} /> */}
                                {/* <Route path='/top' element={<Dashboard/>} /> */}
                                {/* <Route path='/lists' element={<Dashboard/>} /> */}
                                {/* <Route path='/advice' element={<Dashboard/>} /> */}
                                {/* <Route path='/courses' element={<Dashboard/>} /> */}
                                {/* <Route path='/books' element={<Dashboard/>} /> */}
                            </Routes>
                        </div>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;
