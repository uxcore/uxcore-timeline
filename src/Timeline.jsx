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
      pending: props.pending,
    };
  }

  render() {
    const me = this;
    const prefixCls = me.props.prefixCls;
    const pending = me.state.pending;
    const timelineClassName = classnames({
      [prefixCls]: true,
      [me.props.className]: me.props.className,
    });
    return (
      <div className={timelineClassName}>
        <ul className={pending ? `${prefixCls}-pending` : ''}>
          {
            React.Children.map(me.props.children, (ele, idx) => React.cloneElement(ele, {
              last: idx === me.props.children.length - 1,
            }))
          }
          {(pending) ? <TimelineItem pending color="gray">{pending}</TimelineItem> : null}
        </ul>
      </div>
    );
  }
}

// http://facebook.github.io/react/docs/reusable-components.html
Timeline.defaultProps = {
  className: '',
  prefixCls: 'kuma-timeline',
};

Timeline.propTypes = {
  className: React.PropTypes.string,
  prefixCls: React.PropTypes.string,
  pending: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

Timeline.Item = TimelineItem;

Timeline.displayName = 'Timeline';

module.exports = Timeline;
