import { OPEN_LIGHTBOX } from '../types/GalleryTypes';
import { CLOSE_LIGHTBOX } from '../types/GalleryTypes';

const GalleryReducer = (state, action) => {
    if (action.type === OPEN_LIGHTBOX && action.payload === 'img1') {
        return {
            ...state,
            lightboxStatus: true,
            lightboxImage: 1,
        };
    } else if (action.type === OPEN_LIGHTBOX && action.payload === 'img2') {
        return {
            ...state,
            lightboxStatus: true,
            lightboxImage: 2,
        };
    } else if (action.type === OPEN_LIGHTBOX && action.payload === 'img3') {
        return {
            ...state,
            lightboxStatus: true,
            lightboxImage: 3,
        };
    } else if (action.type === CLOSE_LIGHTBOX) {
        return {
            ...state,
            lightboxStatus: false,
            lightboxImage: {},
        };
    } else {
        return state;
    }
};

export default GalleryReducer;
