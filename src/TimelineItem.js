/**
 * Timeline Component for uxcore
 * @author muwen.lb
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
const classnames = require('classnames');

class TimelineItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dot: props.dot
        };
    }

    render() {
        let me = this;
        const itemClassName = classnames({
            "kuma-timeline-item": true,
            "kuma-timeline-item-last": me.props.last,
            "kuma-timeline-item-pending": me.props.pending,
            [`kuma-timeline-item-${me.props.color}`]: true,
            [me.props.className]: me.props.className
        });

        const dotClassName = classnames({
            "kuma-timeline-item-head": true,
            "kuma-timeline-item-head-custom": me.state.dot
        });

        return (
            <li className={itemClassName}>
                <div className="kuma-timeline-item-tail" style={{ borderColor: /orange|blue|red|green/.test(me.props.color) ? null : me.props.color }} />
                <div className={dotClassName} >
                    <div className="kuma-timeline-item-head-icon" style={{ backgroundColor: /orange|blue|red|green/.test(me.props.color) ? null : me.props.color }}>
                        {me.state.dot}
                    </div>
                </div>
                <div className="kuma-timeline-item-content">
                    {
                        me.props.jsxhead ? <div>
                            {me.props.jsxhead}
                        </div> : null
                    }
                    {me.props.children}
                </div>
            </li>
        );
    }
}

// http://facebook.github.io/react/docs/reusable-components.html
TimelineItem.defaultProps = {
    pending: false, //'zh-cn'、'en'
    className: '', //额外的className
    last: false, //是否最后一个
    color: 'orange'  //圆圈颜色,blue/red/green
    //dot: false //自定义圆圈图标

}

TimelineItem.propTypes = {
    pending: React.PropTypes.bool,
    className: React.PropTypes.string,
    last: React.PropTypes.bool,
    color: React.PropTypes.string
    //dot: React.PropTypes.element
}

TimelineItem.displayName = 'Timeline';

module.exports = TimelineItem;
