/**
 * Timeline Component for uxcore
 * @author muwen.lb
 *
 * Copyright 2015-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TimelineItem from './TimelineItem';


export default class Timeline extends React.Component {
  static defaultProps = {
    className: '',
    prefixCls: 'kuma-timeline',
  };

  static propTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    pending: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
    children: PropTypes.any,
  };

  static Item = TimelineItem;

  static displayName = 'Timeline';
  constructor(props) {
    super(props);
    this.state = {
      pending: props.pending,
    };
  }

  render() {
    const prefixCls = this.props.prefixCls;
    const pending = this.state.pending;
    const timelineClassName = classnames({
      [prefixCls]: true,
      [this.props.className]: this.props.className,
    });
    return (
      <div className={timelineClassName}>
        <ul className={pending ? `${prefixCls}-pending` : ''}>
          {
            React.Children.map(this.props.children, (ele, idx) => React.cloneElement(ele, {
              last: idx === this.props.children.length - 1,
            }))
          }
          {(pending) ? <TimelineItem pending color="gray">{pending}</TimelineItem> : null}
        </ul>
      </div>
    );
  }
}
