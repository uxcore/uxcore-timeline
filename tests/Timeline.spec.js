import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from 'uxcore-icon';
import Timeline from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Timeline', () => {
  it('should render correctly', () => {
    mount(<Timeline />);
  });
  it('props', () => {
    const wrapper = mount(<Timeline pending={<a>To do</a>}>
      <Timeline.Item title="2017-10-25 星期一" dotted>
        <p>content1</p>
        <p>content1</p>
      </Timeline.Item>
      <Timeline.Item title="2017-10-26 星期二" dot={<Icon name="shezhi" />}>
        <p>content2</p>
        <p>content2</p>
      </Timeline.Item>
      <Timeline.Item title="2017-10-27 星期三">
        <p>content3</p>
        <p>content3</p>
      </Timeline.Item>
    </Timeline>);
    expect(wrapper.find('.uxicon-shezhi')).to.have.length(1);
    expect(wrapper.find('.kuma-timeline-item-title')).to.have.length(3);
    expect(wrapper.find('.kuma-timeline-item-dotted')).to.have.length(1);
    expect(wrapper.find(Timeline)).to.have.length(1);
    expect(wrapper.contains(<a>To do</a>)).to.equal(true);
  });
});
