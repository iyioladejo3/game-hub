import { useEffect } from "react";
import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url:string) => {
    //url is the originalWorld
    if (!url) return noImage;
    const target = 'media/'
    const index = url.indexOf(target) + target.length; //Position to insert the word
    const stringToInsert= 'crop/600/400/';
    return url.slice(0,index) + stringToInsert + url.slice(index);
};

export default getCroppedImageUrl;