import React, { Component } from 'react';

import ShadowBar from './ShadowBar';

import {
    ProfileHeaderLoader as AnimatedProfileHeaderLoader,
    MentionHeaderLoader as AnimatedMentionHeaderLoader,
    RoomHeaderLoader as AnimatedRoomHeaderLoader,
    MessageLoader as AnimatedMessageLoader,
    ProfileMessageLoader as AnimatedProfileMessageLoader,
} from './AnimatedShadowBlocks';

import {
    ProfileHeaderLoader as StaticProfileHeaderLoader,
    RoomHeaderLoader as StaticRoomHeaderLoader,
    MentionHeaderLoader as StaticMentionHeaderLoader,
    MessageLoader as StaticMessageLoader,
    ProfileMessageLoader as StaticProfileMessageLoader,
} from './StaticShadowBlocks';


export class Loader extends Component {
    render() {
        return (
            <div>
                <ShadowBar height={18} width={0.25} />
                <ShadowBar height={14} width={0.7} />
            </div>   
        );
    }
}

export const ProfileHeaderLoader = (props) => {
    const { animated } = props;
    return (
        <div>
            { animated ? <AnimatedProfileHeaderLoader /> : <StaticProfileHeaderLoader /> }
        </div>
    );
};

export const MentionHeaderLoader = (props) => {
    const { animated } = props;
    return (
        <div>
            { animated ? <AnimatedMentionHeaderLoader /> : <StaticMentionHeaderLoader /> }
        </div>
    );
};

export const RoomHeaderLoader = (props) => {
    const { animated } = props;
    return (
        <div>
            { animated ? <AnimatedRoomHeaderLoader /> : <StaticRoomHeaderLoader /> }
        </div>
    );
};

export const MessageLoader = (props) => {
    const { animated } = props;
    return (
        <div>
            { animated ? <AnimatedMessageLoader /> : <StaticMessageLoader /> }
        </div>
    );
};

export const ProfileMessageLoader = (props) => {
    const { animated } = props;
    return (
        <div>
            { animated ? <AnimatedProfileMessageLoader /> : <StaticProfileMessageLoader /> }
        </div>
    );
};