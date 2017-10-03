import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import ImageLoader, { ImageLoader2 } from './ImageLoader';
import {
    Loader,
    AnimatedProfileHeaderLoader,
    AnimatedMessageLoader,
    AnimatedRoomHeaderLoader,
    AnimatedMentionHeaderLoader,
    AnimatedProfileMessageLoader,
} from './MessageLoader';
import './style.scss';

const getClassNames = (state) => {
    const {
        darkTheme,
        contrast
    } = state;

    return classNames({
        dark: darkTheme,
        light: !darkTheme,
        contrast,
    });
}

class ComponentList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            darkTheme: false,
            contrast: false,
        };
        this.onToggleTheme = this.onToggleTheme.bind(this);
        this.onToggleContrast = this.onToggleContrast.bind(this);
    }

    onToggleTheme()  {
        this.setState({
            darkTheme: !this.state.darkTheme
        });
    }

    onToggleContrast() {
        this.setState({
            contrast: !this.state.contrast
        });
    }

    render() {
        return (
            <div className={getClassNames(this.state)}>
                <div className="controls">
                    <button onClick={this.onToggleTheme}>
                        Toggle theme
                    </button>
                    <label>
                        Contrast
                        <input type="checkbox" checked={this.state.contrast} onChange={this.onToggleContrast} />
                    </label>
                </div>
                <ImageLoader dimension={200} />
                <ImageLoader2 dimension={200} />
                <Loader />
                <AnimatedProfileHeaderLoader />
                <AnimatedMessageLoader />
                <AnimatedRoomHeaderLoader />
                <AnimatedMentionHeaderLoader />
                <AnimatedProfileMessageLoader />
            </div>
        );   
    }
};

const div = document.createElement('div');
ReactDOM.render(<ComponentList />, div);

document.body.appendChild(div);