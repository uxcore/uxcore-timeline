/**
 * Timeline Component Demo for uxcore
 * @author muwen.lb
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const Timeline = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div style={{ display: 'inline-block', verticalAlign: 'top', margin: '50px' }}>
          普通使用
          <br />
          <br />
          <Timeline>
            <Timeline.Item title="2016-10-25 星期一">
              <p>content1</p>
              <p>content1</p>
            </Timeline.Item>
            <Timeline.Item title="2016-10-26 星期二">
              <p>content2</p>
              <p>content2</p>
            </Timeline.Item>
            <Timeline.Item title="2016-10-27 星期三">
              <p>content3</p>
              <p>content3</p>
            </Timeline.Item>
          </Timeline>
        </div>
        <div style={{ display: 'inline-block', verticalAlign: 'top', margin: '50px' }}>
          当前时间节点
          <br />
          <br />
          <Timeline>
            <Timeline.Item title="2016-10-25 星期一">
              <p>content1</p>
              <p>content1</p>
            </Timeline.Item>
            <Timeline.Item active title="2016-10-26 星期二">
              <p>content2</p>
              <p>content2</p>
            </Timeline.Item>
            <Timeline.Item title="2016-10-27 星期三">
              <p>content3</p>
              <p>content3</p>
            </Timeline.Item>
          </Timeline>
        </div>
        <div style={{ display: 'inline-block', verticalAlign: 'top', margin: '50px' }}>
          自定义颜色线条
          <br />
          <br />
          <Timeline>
            <Timeline.Item color="green" title="2016-10-25 星期一">
              <p>content2</p>
              <p>content2</p>
            </Timeline.Item>
            <Timeline.Item color="blue" title="2016-10-26 星期二">
              <p>content3</p>
              <p>content3</p>
            </Timeline.Item>
            <Timeline.Item color="red" title="2016-10-27 星期三">
              <p>content4</p>
              <p>content4</p>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    );
  }
}

module.exports = Demo;
