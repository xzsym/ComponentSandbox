import React from 'react';

const DEFAULT_DIAMETER = 34;

const styles = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: `${DEFAULT_DIAMETER}px`,
    height: `${DEFAULT_DIAMETER}px`,
    borderRadius: '50%',
    margin: '0 0 0 28px',
};

const ShadowCircle = (props) => {
    const { diameter = DEFAULT_DIAMETER } = props;
    const customStyles = {
        width: `${diameter}px`,
        height: `${diameter}px`,
    };

    return (
        <div style={Object.assign(styles, customStyles)}></div>
    );
}

export default ShadowCircle;
