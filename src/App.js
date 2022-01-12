import './main.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import GalleryProvider from './contexts/providers/GalleryProvider';

function App() {
    return (
        <div className='App'>
            <Router>
                <GalleryProvider>
                    <HelmetProvider>
                        <Route path='/' exact component={Home} />
                    </HelmetProvider>
                </GalleryProvider>
            </Router>
        </div>
    );
}

export default App;
