import './main.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import GalleryProvider from './contexts/providers/GalleryProvider';

function App() {
    return (
        <div className='App'>
            <Router>
                <GalleryProvider>
                    <HelmetProvider>
                        <Switch>
                            <Route path='/' exact component={Home} />
                        </Switch>
                    </HelmetProvider>
                </GalleryProvider>
            </Router>
        </div>
    );
}

export default App;
