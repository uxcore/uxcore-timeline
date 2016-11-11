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
      [`${prefixCls}-item-${me.props.color}`]: true,
      [me.props.className]: me.props.className,
    });

    const dotClassName = classnames({
      [`${prefixCls}-item-head`]: true,
      [`${prefixCls}-item-head-custom`]: me.state.dot,
    });

    return (
      <li className={itemClassName}>
        <div className={`${prefixCls}-item-tail`}
          style={{
            borderColor: /orange|blue|gray|green/.test(me.props.color) ? null : me.props.color,
          }}
        />
        <div className={dotClassName} >
          <div className={`${prefixCls}-item-head-icon`}
            style={{
              backgroundColor: /orange|blue|gray|green/.test(me.props.color) ? null : me.props.color,
            }}
          >
            {me.state.dot}
          </div>
        </div>
        <div className={`${prefixCls}-item-content`}>
          {me.props.children}
        </div>
      </li>
    );
  }
}

// http://facebook.github.io/react/docs/reusable-components.html
TimelineItem.defaultProps = {
  pending: false, // 'zh-cn'、'en'
  prefixCls: 'kuma-timeline',
  className: '', // 额外的className
  last: false, // 是否最后一个
  color: 'orange',  // 圆圈颜色,blue/red/green
  dotted: false, // 自定义实线虚线

};

TimelineItem.propTypes = {
  pending: React.PropTypes.bool,
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  last: React.PropTypes.bool,
  color: React.PropTypes.string,
  dotted: React.PropTypes.bool,
};

TimelineItem.displayName = 'Timeline';

module.exports = TimelineItem;
