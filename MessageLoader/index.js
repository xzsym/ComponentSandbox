import React, { Component } from 'react';

import ShadowBar from './ShadowBar';

export {
    ProfileLoader as AnimatedProfileLoader,
    MessageLoader as AnimatedMessageLoader
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

