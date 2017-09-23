import React from 'react';
import ReactDOM from 'react-dom';

import ImageLoader from './ImageLoader';

const ComponentList = () => {
    return (
        <div>
            <ImageLoader dimension={200} />
            <ImageLoader dimension={300} />
            <ImageLoader dimension={400} theme={'dark'} />
        </div>
    );
};

const div = document.createElement('div');
ReactDOM.render(<ComponentList />, div);

document.body.appendChild(div);