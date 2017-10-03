import React, { Component } from 'react';

import ShadowBar from './ShadowBar';

export {
    ProfileHeaderLoader as AnimatedProfileHeaderLoader,
    MessageLoader as AnimatedMessageLoader,
    RoomHeaderLoader as AnimatedRoomHeaderLoader,
    MentionHeaderLoader as AnimatedMentionHeaderLoader,
    ProfileMessageLoader as AnimatedProfileMessageLoader,
} from './AnimatedShadowBlock';

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

