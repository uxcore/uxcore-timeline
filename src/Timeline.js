/**
 * Timeline Component for uxcore
 * @author muwen.lb
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
const classnames = require('classnames');
const TimelineItem = require('./TimelineItem');

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: props.pending
        };
    }

    render() {
        let me = this;
        let pending = me.state.pending;
        // <div className={"kuma-timeline " + me.props.className}>
        //         <ul className={!!pending ? "kuma-timeline-pending" : ""}>
        //             {
        //                 React.Children.map(children, (ele, idx) => {
        //                     return React.cloneElement(ele, {
        //                         last: idx === children.length - 1,
        //                     })
        //                 })
        //             }
        //             {(!!pending) ? <TimelineItem pending={true}>{pending}</TimelineItem> : null}
        //         </ul>
        //     </div>
        return (
            <div className={"kuma-timeline " + me.props.className}>
                <ul className={!!pending ? "kuma-timeline-pending" : ""}>
                    {
                        React.Children.map(me.props.children, (ele, idx) => {
                            return React.cloneElement(ele, {
                                last: idx === me.props.children.length - 1,
                            })
                        })
                    }
                    {(!!pending) ? <TimelineItem pending={true}>{pending}</TimelineItem> : null}
                </ul>
            </div>
        );
    }
}

// http://facebook.github.io/react/docs/reusable-components.html
Timeline.defaultProps = {
    className: '' //额外的className
}

Timeline.propTypes = {
    className: React.PropTypes.string
}

Timeline.Item = TimelineItem;

Timeline.displayName = 'Timeline';

module.exports = Timeline;
