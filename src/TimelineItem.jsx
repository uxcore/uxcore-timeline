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
      dot: props.dot,
    };
  }

  render() {
    const me = this;
    const prefixCls = me.props.prefixCls;
    const itemClassName = classnames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-last`]: me.props.last,
      [`${prefixCls}-item-pending`]: me.props.pending,
      [`${prefixCls}-item-dotted`]: me.props.dotted,
      [`${prefixCls}-item-active`]: me.props.active,
      [me.props.className]: me.props.className,
    });

    const dotClassName = classnames({
      [`${prefixCls}-item-icon`]: true,
      [`${prefixCls}-item-icon-custom`]: me.state.dot,
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
          className={dotClassName}
          style={{
            backgroundColor: me.props.color || null,
          }}
        >
          {me.state.dot}
        </div>
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
  pending: false,
  prefixCls: 'kuma-timeline',
  className: '', // 额外的className
  last: false, // 是否最后一个
  color: '', // 自定义颜色
  dotted: false, // 自定义实线虚线
  active: false, // 进行中的时间节点
  title: '',
};

TimelineItem.propTypes = {
  pending: React.PropTypes.bool,
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  last: React.PropTypes.bool,
  color: React.PropTypes.string,
  dotted: React.PropTypes.bool,
  active: React.PropTypes.bool,
  title: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ]),
  dot: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ]),
};

TimelineItem.displayName = 'Timeline';

module.exports = TimelineItem;
