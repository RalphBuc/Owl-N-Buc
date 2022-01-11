import { useState } from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [state] = useState({
        icon: '/assets/icon/icon.png',
        image: '/assets/images/header.jpg',
    });
    return (
        <div>
            <Helmet>
                <title>Owl N Buc</title>
                <meta name='description' content='For nothing. just for practice' />
                <meta name='keywords' content='Owl hunt, Owl gallery' />
            </Helmet>
            <Header image={state.image} icon={state.icon} />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;
