import React from 'react';

import Spinner from './spiner';
import SymphonyIcon from './symphonyIcon';
import './style/loader.scss';

const DEFAULT_DIMENSION = 100;

const imageLoader = (props) => {

    const { dimension, theme } = props;
    const dimInPx = `${dimension || DEFAULT_DIMENSION}px`;
    const style = {
        width: dimInPx,
        height: dimInPx,
    };

    return (
        <div className="imageloader-container" style={style}>
            <svg className="spinner" viewBox="25 25 50 50" xmlns="http://www.w3.org/2000/svg">
            <circle
                className="path"
                cx={50}
                cy={50}
                r={20} />
            </svg>
            <div className="icon">
                <SymphonyIcon dimension={dimension/2}/>
            </div>
        </div>
    );

};

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

export const ImageLoader2 = (props) => {

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

export default imageLoader;
