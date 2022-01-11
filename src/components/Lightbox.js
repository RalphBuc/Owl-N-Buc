import { useContext } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import { CLOSE_LIGHTBOX } from '../contexts/types/GalleryTypes';

const Lightbox = ({ Image }) => {
    const { gallery, dispatch } = useContext(GalleryContext);
    const { lightboxImage } = gallery;
    const closelightbox = (e) => {
        const classname = e.target.getAttribute('class');
        if (classname === 'lightbox') {
            dispatch({ type: CLOSE_LIGHTBOX });
        }
    };
    return (
        <div>
            <div className='lightbox' onClick={closelightbox}>
                <div className='lightbox__card'>
                    <div className='lightbox__card__image'>
                        {lightboxImage === 1 ? (
                            <img src={Image.owl1} alt='pic' />
                        ) : lightboxImage === 2 ? (
                            <img src={Image.owl2} alt='pic' />
                        ) : lightboxImage === 3 ? (
                            <img src={Image.owl3} alt='pic' />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
