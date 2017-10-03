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
        <div className="shadowblock-hbox">
            <div className="avatar"/>
            <div className="gap background-mask"/>
            <div className="details">
                <Bar ratio="1:1" thick/>
                <div className="background-mask hbar"/>
                <Bar ratio="1:2"/>
            </div>
        </div>
    );
};

const defaultSetting = [{ratio: "1:3", thick: true}, {ratio: "10:1"}, {ratio: "5:2"}];

const renderBody = (messages = defaultSetting) => {
    const messageBars = messages.map((v, i) => <Bar key={i} ratio={v.ratio} thick={v.thick}/>);
    const bars = [];
    for(let i = 0, len = messageBars.length; i < len; i++) {
        bars.push(messageBars[i]);
        if (i < len - 1) {
            bars.push(<div key={`div${i}`} className="background-mask hbar"/>);
        }
    }

    return (
        <div className="shadowblock-body">
            { bars }
        </div>
    );
};

export const ProfileHeaderLoader = (props) => {
    const { header } = props;

    return (
        <div className="timeline-item header">
            <div className="animated-background">
                { renderHeaders() }
            </div>
        </div>
    );
};

export const MessageLoader = (props) => {
    const { messages } = props;
    return (
        <div className="timeline-item message">
            <div className="animated-background">
                { renderBody(messages) }
            </div>
        </div>
    );
};

export const RoomHeaderLoader = () => {
    const setting = [{ratio: "1:4", thick: true}, {ratio: "4:1"}];
    return (
        <div className="timeline-item header">
            <div className="animated-background">
                { renderBody(setting) }
            </div>
        </div>
    );
};

export const MentionHeaderLoader = () => {
    return (
        <div className="timeline-item header">
            <div className="animated-background">
                <Bar ratio="1:3" thick/>
            </div>
        </div>
    );
};

export const ProfileMessageLoader = () => {
    return (
        <div className="timeline-item message">
            <div className="animated-background">
                <div className="shadowblock-hbox">
                    <div className="shadowblock-vbox">
                        <div className="avatar"/>
                        <div className="background-mask block"/>
                    </div>
                    <div className="gap background-mask vbar"/>
                    <div className="details">
                        { renderBody() }
                    </div>
                </div>
            </div>
        </div>
    );
};