import React from 'react';
import classNames from 'classnames';
import './style/staticstyles.scss';

const DEFAULT_DIAMETER = 34;

const ShadowCircle = (props) => {
    const { diameter } = props;
    const customStyles = !diameter ? {} : {
        width: `${diameter || DEFAULT_DIAMETER }px`,
        height: `${diameter || DEFAULT_DIAMETER }px`,
    };

    return (
        <div className="avatar" style={customStyles}></div>
    );
}

const DEFAULT_WIDTH_PERCENTAGE = 0.8;

const barStyles = {
    width: `${DEFAULT_WIDTH_PERCENTAGE * 100}%`,
};

const ShadowBar = (props) => {
    const { width = DEFAULT_WIDTH_PERCENTAGE, thick } = props;
    const customStyles = {
        width: `${width * 100}%`,
    };
    const classes = classNames('shadowbar', { thick });

    return (
        <div className={classes} style={Object.assign(barStyles, customStyles)}></div>
    );
}

export const ProfileHeaderLoader = () => {
    return (
        <div className="shadow-container shadowblock-hbox header">
            <ShadowCircle />
            <div className="shadowblock-vbox hpadding span">
                <ShadowBar width={0.25} thick />
                <div className="hseparator" />
                <ShadowBar width={0.7} />
            </div>
        </div>
    );
};

export const RoomHeaderLoader = () => {
    return (
        <div className="shadow-container shadowblock-vbox header">
            <ShadowBar width={0.25} thick />
            <div className="hseparator" />
            <ShadowBar width={0.7} />
        </div>
    );
};

export const MentionHeaderLoader = () => {
    return (
        <div className="shadow-container header">
            <ShadowBar width={0.25} thick />
        </div>
    );
};

export const MessageLoader = () => {
    return (
        <div className="shadow-container shadowblock-vbox message">
            <ShadowBar width={0.25} thick />
            <div className="hseparator" />
            <ShadowBar width={0.8} />
            <div className="hseparator" />
            <ShadowBar width={0.7} />
        </div>
    );
};

export const ProfileMessageLoader = () => {
    return (
        <div className="shadow-container shadowblock-hbox message">
            <ShadowCircle />
            <div className="shadowblock-vbox hpadding span">
                <ShadowBar width={0.25} thick />
                <div className="hseparator" />
                <ShadowBar width={0.8} />
                <div className="hseparator" />
                <ShadowBar width={0.7} />
            </div>
        </div>
    );
};
