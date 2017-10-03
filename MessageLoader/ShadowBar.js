import React from 'react';

const DEFAULT_HEIGHT = 18;
const DEFAULT_WIDTH_PERCENTAGE = 0.8;

const styles = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: `${DEFAULT_WIDTH_PERCENTAGE * 100}%`,
    height: `${DEFAULT_HEIGHT}px`,
    borderRadius: '2px',
    margin: '5px 0px 5px 20px',
};

const ShadowBar = (props) => {
    const { height = DEFAULT_HEIGHT, width = DEFAULT_WIDTH_PERCENTAGE } = props;
    const customStyles = {
        width: `${width * 100}%`,
        height: `${height}px`,
    };

    return (
        <div style={Object.assign(styles, customStyles)}></div>
    );
}

export default ShadowBar;
