## uxcore-timeline

React timeline

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-timeline.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-timeline
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-timeline.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-timeline
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-timeline.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-timeline?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-timeline.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-timeline
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-timeline.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-timeline#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-timeline.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-timeline.svg
[sauce-url]: https://saucelabs.com/u/uxcore-timeline


### Development

```sh
git clone https://github.com/uxcore/uxcore-timeline
cd uxcore-timeline
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-timeline
cd uxcore-timeline
npm install
npm run dep
npm run start
```

### Test Case

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

## Demo

http://uxcore.github.io/components/timeline

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## 何时使用

- 当有一系列信息需要从上至下按时间排列时；
- 需要有一条时间轴进行视觉上的串联时；

## API

```jsx
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
```

## Props

### Timeline

时间轴。

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| className | String | false | 无 | 额外类名 |
| pending | jsx | false | 无 | 指定最后一个幽灵节点内容 |

### Timeline.Item

时间轴的每一个节点。

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| className | String | false | 无 | 额外类名 |
| color | String | false | orange | 指定圆圈颜色 `orange, blue, gray, green`，或自定义的色值 |
| dot | jsx | false | 无 | 自定义时间轴点 |
