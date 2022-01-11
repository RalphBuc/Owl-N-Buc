import './main.css';
import Home from './pages/Home';
import { HelmetProvider } from 'react-helmet-async';
import GalleryProvider from './contexts/providers/GalleryProvider';

function App() {
    return (
        <div className='App'>
            <GalleryProvider>
                <HelmetProvider>
                    <Home />
                </HelmetProvider>
            </GalleryProvider>
        </div>
    );
}

export default App;
