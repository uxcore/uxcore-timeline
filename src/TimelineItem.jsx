/**
 * Timeline Component for uxcore
 * @author muwen.lb
 *
 * Copyright 2015-2017, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class TimelineItem extends Component {

  static displayName = 'Timeline';

  static defaultProps = {
    pending: false,
    prefixCls: 'kuma-timeline',
    className: '', // 额外的className
    last: false, // 是否最后一个
    color: '', // 自定义颜色
    dotted: false, // 自定义实线虚线
    active: false, // 进行中的时间节点
    title: '',
  };

  static propTypes = {
    pending: PropTypes.bool,
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    last: PropTypes.bool,
    color: PropTypes.string,
    dotted: PropTypes.bool,
    active: PropTypes.bool,
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
    dot: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      dot: props.dot,
    };
  }

  render() {
    const prefixCls = this.props.prefixCls;
    const itemClassName = classnames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-last`]: this.props.last,
      [`${prefixCls}-item-pending`]: this.props.pending,
      [`${prefixCls}-item-dotted`]: this.props.dotted,
      [`${prefixCls}-item-active`]: this.props.active,
      [this.props.className]: this.props.className,
    });

    const dotClassName = classnames({
      [`${prefixCls}-item-icon`]: true,
      [`${prefixCls}-item-icon-custom`]: this.state.dot,
    });

    return (
      <li className={itemClassName}>
        <div
          className={`${prefixCls}-item-line`}
          style={{
            borderColor: this.props.color || null,
          }}
        />
        <div
          className={dotClassName}
          style={{
            backgroundColor: this.props.color || null,
          }}
        >
          {this.state.dot}
        </div>
        {this.props.title ? <div
          className={`${prefixCls}-item-title`}
          style={{
            color: this.props.color || null,
          }}
        >
          {this.props.title}
        </div> : null}
        <div className={`${prefixCls}-item-content`}>
          {this.props.children}
        </div>
      </li>
    );
  }
}

