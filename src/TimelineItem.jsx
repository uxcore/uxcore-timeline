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
    this.state = {};
  }

  render() {
    const me = this;
    const prefixCls = me.props.prefixCls;
    const itemClassName = classnames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-last`]: me.props.last,
      [`${prefixCls}-item-active`]: me.props.active,
      [me.props.className]: me.props.className,
    });

    return (
      <li className={itemClassName}>
        <div
          className={`${prefixCls}-item-line`}
          style={{
            borderColor: me.props.color || null,
          }}
        />
        <div
          className={`${prefixCls}-item-icon`}
          style={{
            backgroundColor: me.props.color || null,
          }}
        />
        {me.props.title ? <div
          className={`${prefixCls}-item-title`}
          style={{
            color: me.props.color || null,
          }}
        >
          {me.props.title}
        </div> : null}
        <div className={`${prefixCls}-item-content`}>
          {me.props.children}
        </div>
      </li>
    );
  }
}

// http://facebook.github.io/react/docs/reusable-components.html
TimelineItem.defaultProps = {
  prefixCls: 'kuma-timeline',
  className: '', // 额外的className
  last: false, // 是否最后一个
  active: false, // 进行中的时间节点
  color: '', // 自定义颜色
  title: '',
};

TimelineItem.propTypes = {
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  last: React.PropTypes.bool,
  active: React.PropTypes.bool,
  color: React.PropTypes.string,
  title: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ]),
};

TimelineItem.displayName = 'Timeline';

module.exports = TimelineItem;
