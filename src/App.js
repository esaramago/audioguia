import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Info from './routes/Info';
import Map from './routes/Map';

function App() {
    return (
        <Router>
            <main>
                <nav>
                    <ul>
                        <li><Link to="/">Info</Link></li>
                        <li><Link to="/map">Map</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Info />} />
                    <Route path="/map" element={<Map />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
