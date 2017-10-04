import React from 'react';

import Spinner from './spiner';
import SymphonyIcon from './symphonyIcon';
import './style/loader.scss';

const DEFAULT_SIZE = 80;
const MIN_SIZE = 40;
const MAX_SIZE = 100;

const getLoaderSize = (dim) => {
    if (!dim) {
        return DEFAULT_SIZE;
    }
    if (dim > MAX_SIZE) {
        return MAX_SIZE;
    } else if (dim < MIN_SIZE) {
        return MIN_SIZE;
    }

    return DEFAULT_SIZE;
};

export const ImageLoader = (props) => {

    const { dimension, theme } = props;
    const dimInPx = `${dimension || DEFAULT_DIMENSION}px`;
    const containerStyle = {
        width: dimInPx,
        height: dimInPx,
    };
    const loaderSize = getLoaderSize(dimension);
    const sizeInPx = `${loaderSize}px`;
    const loaderStyle = {
        width: sizeInPx,
        height: sizeInPx,
    };

    return (
        <div className="imageloader-container" style={containerStyle}>
            <div className="loader" style={loaderStyle}>
                <Spinner dimension={loaderSize} />
                <div className="icon">
                    <SymphonyIcon dimension={loaderSize/2}/>
                </div>
            </div>
        </div>
    );
};

export default ImageLoader;
