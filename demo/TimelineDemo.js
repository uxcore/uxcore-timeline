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
                <Timeline pending={<a href="#">See more</a>}>
                    <Timeline.Item jsxhead={<span>2014-09-09</span>}>
                        <p>content</p>
                        <p>content</p>
                        <p>content</p>
                        <p>content</p>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        Solve initial network problems 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item color="blue">
                        Technical testing 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>
                        Network problems being solved 2015-09-01
                    </Timeline.Item>
                </Timeline>
            </div>
        );
    }
}

module.exports = Demo;
