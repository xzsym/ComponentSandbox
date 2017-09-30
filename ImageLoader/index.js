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

export const ImageLoader2 = (props) => {

    const { dimension, theme } = props;
    const dimInPx = `${dimension || DEFAULT_DIMENSION}px`;
    const style = {
        width: dimInPx,
        height: dimInPx,
    };

    return (
        <div className="imageloader-container" style={style}>
            <Spinner dimension={dimension} />
            <div className="icon">
                <SymphonyIcon dimension={dimension/2}/>
            </div>
        </div>
    );
};

export default imageLoader;
