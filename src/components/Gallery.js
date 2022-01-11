import { useState } from 'react';
import { useContext } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import { OPEN_LIGHTBOX } from '../contexts/types/GalleryTypes';
import Lightbox from './Lightbox';

const Gallery = () => {
    const [galleryImage] = useState({
        owl2: 'assets/images/owl1.jpg',
        owl3: 'assets/images/owl2.jpg',
        owl1: 'assets/images/owl3.jpg',
    });

    const { gallery, dispatch } = useContext(GalleryContext);

    const { lightboxStatus } = gallery;

    return (
        <>
            {lightboxStatus ? <Lightbox Image={galleryImage} /> : ''}
            <div className='gallery'>
                <div className='gallery_img1'>
                    <img
                        src={galleryImage.owl1}
                        alt='gallery images'
                        onClick={() => dispatch({ type: OPEN_LIGHTBOX, payload: 'img1' })}
                    />
                </div>
                <div className='gallery_img2'>
                    <img
                        src={galleryImage.owl2}
                        alt='gallery images'
                        onClick={() => dispatch({ type: OPEN_LIGHTBOX, payload: 'img2' })}
                    />
                </div>
                <div className='gallery_img3'>
                    <img
                        src={galleryImage.owl3}
                        alt='gallery images'
                        onClick={() => dispatch({ type: OPEN_LIGHTBOX, payload: 'img3' })}
                    />
                </div>
            </div>
        </>
    );
};

export default Gallery;
