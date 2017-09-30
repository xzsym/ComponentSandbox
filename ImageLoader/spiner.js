import React from 'react';

import './style/spinner.scss';

export default (props) => {
    const { dimension } = props;
    const dimInPx = `${dimension}px`;
    const style = {
        width: dimInPx,
        height: dimInPx,
    };
    return (
        <div className="wrapper" style={style}>
            <div className="spinner-layer">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
};
