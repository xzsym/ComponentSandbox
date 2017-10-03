import React from 'react';
import className from 'classnames';
import './style/animation.scss';

const Bar = (props) => {
    const { ratio, thick } = props;
    const [left, right] = ratio.split(':');

    return (
        <div className={className('shadowbar', { thick })}>
            <div className="shadowbar-fill" style={{flex:left}}/>
            <div className="background-mask" style={{flex:right}}/>
        </div>
    );
};

const renderHeaders = () => {
    return (
        <div className="shadowblock-heander">
            <div className="left background-mask"/>
            <div className="right">
                <div className="top background-mask hbar"/>
                <div className="middle">
                    <div className="avatar"/>
                    <div className="gap background-mask vbar"/>
                    <div className="details">
                        <Bar ratio="1:1" thick/>
                        <div className="background-mask hbar"/>
                        <Bar ratio="1:2"/>
                    </div>
                </div>
                <div className="bottom background-mask hbar"/>
            </div>
        </div>
    );
};

const renderBody = (messages) => {
    const messageBars = messages.map(v => <Bar ratio={v.ratio} thick={v.thick}/>);
    const bars = [];
    for(let i = 0, len = messageBars.length; i < len; i++) {
        bars.push(messageBars[i]);
        if (i < len - 1) {
            bars.push(<div className="background-mask hbar"/>);
        }
    }

    return (
        <div className="shadowblock-body">
            <div className="left background-mask"/>
            <div className="right">
                { bars }
            </div>
        </div>
    );
};

export const ProfileLoader = (props) => {
    const { header } = props;

    return (
        <div className="timeline-item">
            <div className="animated-background">
                { renderHeaders() }
            </div>
        </div>
    );
};

export const MessageLoader = (props) => {
    const { messages } = props;
    const defaultSetting = [{ratio: "1:3", thick: true}, {ratio: "10:1"}, {ratio: "5:2"}];
    return (
        <div className="timeline-item">
            <div className="animated-background">
                { renderBody(messages || defaultSetting) }
            </div>
        </div>
    );
}

export const CombinedLoader = () => {

}
