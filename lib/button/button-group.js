'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var prefix = 'ant-btn-group-';

var ButtonGroup = (function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    _get(Object.getPrototypeOf(ButtonGroup.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var size = _props.size;
      var className = _props.className;

      var others = _objectWithoutProperties(_props, ['size', 'className']);

      // large => lg
      // small => sm
      var sizeCls = ({
        'large': 'lg',
        'small': 'sm'
      })[size] || '';

      var classes = (0, _classnames2['default'])((_classNames = {
        'ant-btn-group': true
      }, _defineProperty(_classNames, prefix + sizeCls, sizeCls), _defineProperty(_classNames, className, className), _classNames));

      return _react2['default'].createElement('div', _extends({}, others, { className: classes }));
    }
  }]);

  return ButtonGroup;
})(_react2['default'].Component);

exports['default'] = ButtonGroup;

ButtonGroup.propTypes = {
  size: _react2['default'].PropTypes.string
};
module.exports = exports['default'];