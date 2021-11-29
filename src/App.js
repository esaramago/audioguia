import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from './routes/Info';
import Map from './routes/Map';
import Guide from './routes/Guide';
import Number from './routes/Number';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Info />} />
                <Route path="/map" element={<Map />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/guide/:audio" element={<Number />} />
            </Routes>
        </Router>
    );
}

export default App;
