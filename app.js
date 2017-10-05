import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import ImageLoader from './ImageLoader';
import {
    Loader,
    ProfileHeaderLoader,
    MessageLoader,
    RoomHeaderLoader,
    MentionHeaderLoader,
    ProfileMessageLoader,
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
               
                <ImageLoader dimension={100} />
                <ImageLoader dimension={50} />
                <ImageLoader dimension={400} />
                <ImageLoader dimension={100} />
                <ImageLoader dimension={400} />

                <div className="header">

                <ProfileHeaderLoader />
                <ProfileHeaderLoader animated />

                <RoomHeaderLoader />
                <RoomHeaderLoader animated />

                <MentionHeaderLoader />
                <MentionHeaderLoader animated />
                </div>

                <div className="body">
                <MessageLoader />
                <MessageLoader animated />

                <ProfileMessageLoader />
                <ProfileMessageLoader animated />
                </div>
            </div>
        );   
    }
};

const div = document.createElement('div');
ReactDOM.render(<ComponentList />, div);

document.body.appendChild(div);