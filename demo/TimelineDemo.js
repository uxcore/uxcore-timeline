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
        普通使用：
        <Timeline>
          <Timeline.Item>
            <p>2016-10-25</p>
            <p>content1</p>
            <p>content1</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>2016-10-25</p>
            <p>content1</p>
            <p>content1</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <p>2016-10-28</p>
            <p>content4</p>
            <p>content4</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <p>2016-10-28</p>
            <p>content4</p>
            <p>content4</p>
          </Timeline.Item>
        </Timeline>
        各种颜色线条（可自定义）：
        <Timeline>
          <Timeline.Item>
            <p>2016-10-25</p>
            <p>content1</p>
            <p>content1</p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <p>2016-10-26</p>
            <p>content2</p>
            <p>content2</p>
          </Timeline.Item>
          <Timeline.Item color="blue">
            <p>2016-10-27</p>
            <p>content3</p>
            <p>content3</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <p>2016-10-28</p>
            <p>content4</p>
            <p>content4</p>
          </Timeline.Item>
        </Timeline>
        额外添加item（虚线条）：
        <Timeline pending={<a href="#">To do</a>}>
          <Timeline.Item>
            <p>2016-10-25</p>
            <p>content1</p>
            <p>content1</p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <p>2016-10-26</p>
            <p>content2</p>
            <p>content2</p>
          </Timeline.Item>
          <Timeline.Item color="blue">
            <p>2016-10-27</p>
            <p>content3</p>
            <p>content3</p>
          </Timeline.Item>
          <Timeline.Item color="gray">
            <p>2016-10-28</p>
            <p>content4</p>
            <p>content4</p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

module.exports = Demo;
