'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

exports['default'] = function (props) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  var d = undefined;
  props = props || {};
  props.iconClassName = props.iconClassName || 'question-circle';
  var iconClassType = props.iconClassName;

  var width = props.width || 416;

  // 默认为 true，保持向下兼容
  if (!('okCancel' in props)) {
    props.okCancel = true;
  }

  function close() {
    d.setState({
      visible: false
    });
    _reactDom2['default'].unmountComponentAtNode(div);
  }

  function onCancel() {
    var cancelFn = props.onCancel;
    if (cancelFn) {
      var ret = undefined;
      if (cancelFn.length) {
        ret = cancelFn(close);
      } else {
        ret = cancelFn();
        if (!ret) {
          close();
        }
      }
      if (ret && ret.then) {
        ret.then(close);
      }
    } else {
      close();
    }
  }

  function onOk() {
    var okFn = props.onOk;
    if (okFn) {
      var ret = undefined;
      if (okFn.length) {
        ret = okFn(close);
      } else {
        ret = okFn();
        if (!ret) {
          close();
        }
      }
      if (ret && ret.then) {
        ret.then(close);
      }
    } else {
      close();
    }
  }

  var body = _react2['default'].createElement(
    'div',
    { className: 'ant-confirm-body' },
    _react2['default'].createElement(_icon2['default'], { type: iconClassType }),
    _react2['default'].createElement(
      'span',
      { className: 'ant-confirm-title' },
      props.title
    ),
    _react2['default'].createElement(
      'div',
      { className: 'ant-confirm-content' },
      props.content
    )
  );
  var footer = _react2['default'].createElement(
    'div',
    { className: 'ant-confirm-btns' },
    _react2['default'].createElement(
      _button2['default'],
      { type: 'ghost', size: 'large', onClick: onCancel },
      '取 消'
    ),
    _react2['default'].createElement(
      _button2['default'],
      { type: 'primary', size: 'large', onClick: onOk },
      '确 定'
    )
  );

  if (props.okCancel) {
    footer = _react2['default'].createElement(
      'div',
      { className: 'ant-confirm-btns' },
      _react2['default'].createElement(
        _button2['default'],
        { type: 'ghost', size: 'large', onClick: onCancel },
        '取 消'
      ),
      _react2['default'].createElement(
        _button2['default'],
        { type: 'primary', size: 'large', onClick: onOk },
        '确 定'
      )
    );
  } else {
    footer = _react2['default'].createElement(
      'div',
      { className: 'ant-confirm-btns' },
      _react2['default'].createElement(
        _button2['default'],
        { type: 'primary', size: 'large', onClick: onOk },
        '知道了'
      )
    );
  }

  _reactDom2['default'].render(_react2['default'].createElement(
    _index2['default'],
    {
      prefixCls: 'ant-modal',
      className: 'ant-confirm',
      visible: true,
      closable: false,
      title: '',
      transitionName: 'zoom',
      footer: '',
      maskTransitionName: 'fade', width: width },
    _react2['default'].createElement(
      'div',
      { style: { zoom: 1, overflow: 'hidden' } },
      body,
      ' ',
      footer
    )
  ), div, function () {
    d = this;
  });
};

module.exports = exports['default'];