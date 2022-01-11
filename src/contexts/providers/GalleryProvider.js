import { useReducer } from 'react';
import GalleryContext from '../GalleryContext';
import GalleryReducer from '../reducers/GalleryReducer';

const GalleryProvider = ({ children }) => {
    const [gallery, dispatch] = useReducer(GalleryReducer, {
        lightboxStatus: false,
        lightboxImage: {},
    });

    return (
        <GalleryContext.Provider value={{ gallery, dispatch }}>{children}</GalleryContext.Provider>
    );
};

export default GalleryProvider;
