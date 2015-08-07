(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// Polyfill CustomEvent for IE
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _timezonesJsx = __webpack_require__(1);

	var _timezonesJsx2 = _interopRequireDefault(_timezonesJsx);

	try {
		new CustomEvent("test");
	} catch (e) {
		var _CustomEvent = function _CustomEvent(event, params) {
			var evt = undefined;
			params = params || {
				bubbles: false,
				cancelable: false,
				detail: undefined
			};

			evt = document.createEvent("CustomEvent");
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		};

		_CustomEvent.prototype = window.Event.prototype;
		window.CustomEvent = _CustomEvent;
	}

	var renderHandler = function renderHandler() {
		var reactComp = document.getElementsByTagName("react-timezones"),
		    classComp = document.getElementsByClassName("react-timezones");

		Array.prototype.forEach.call(reactComp, function (el) {
			React.render(React.createElement(_timezonesJsx2["default"], { element: el }), el);
		});

		Array.prototype.forEach.call(classComp, function (el) {
			React.render(React.createElement(_timezonesJsx2["default"], { element: el }), el);
		});
	};

	if (typeof document !== "undefined") {
		renderHandler();
	}

	document.addEventListener("render", renderHandler);

	exports["default"] = _timezonesJsx2["default"];
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _TimezonesStyleCss = __webpack_require__(2);

	var _TimezonesStyleCss2 = _interopRequireDefault(_TimezonesStyleCss);

	var _jstzMin = __webpack_require__(3);

	var Timezones = (function (_React$Component) {
		_inherits(Timezones, _React$Component);

		function Timezones(props) {
			_classCallCheck(this, Timezones);

			_get(Object.getPrototypeOf(Timezones.prototype), "constructor", this).call(this, props);
			this.state = {
				locale: moment.locale(),
				ready: false,
				use_zone: _jstzMin.jstz.determine().name(),
				timezone_diff: false
			};

			this._onClick = this._onClick.bind(this);
		}

		_createClass(Timezones, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var _this = this;

				var attributes = this.props.element.attributes,
				    device_tz = _jstzMin.jstz.determine().name(),
				    org_tz = device_tz;

				Object.keys(attributes).forEach(function (key) {
					var namedNode = undefined;

					if (key !== "length") {
						namedNode = attributes[key];
						if (namedNode.name === "data-org-timezone") {
							if (namedNode.name !== device_tz) {
								org_tz = namedNode.value;
								_this.setState({ timezone_diff: true });
							}
						}
					}
				});

				_.delay(function () {
					var now_local = moment().tz(device_tz),
					    now_org = moment().tz(org_tz);

					var init = {
						device: {
							id: device_tz,
							offset: now_local.utcOffset(),
							current_date: now_local.format("YYYY-MM-DD"),
							is_dst: now_local.isDST(),
							start_of_day: now_local.startOf("day").toISOString()
						},
						organisation: {
							id: org_tz,
							offset: now_org.utcOffset(),
							current_date: now_org.format("YYYY-MM-DD"),
							is_dst: now_org.isDST(),
							start_of_day: now_org.startOf("day").toISOString()
						}
					};
					console.log(init.device);
					console.log(init.organisation);
					_this.setState({ timezones: init, ready: true, use_zone: init.device.id });
					// utils.dispatch(this, Constants.INIT, JSON.stringify(init));
				}, 0);
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				// return utils.componentDidMount(this);

			}
		}, {
			key: "_onClick",
			value: function _onClick(e) {
				var id = e.currentTarget.getAttribute("data-id");
				this.setState({ use_zone: id, timezone_diff: false });
			}

			// _updateState(props) {
			// 	if (props["data-range"] === "true") {
			// 		this.setState({ range: true });
			// 	}
			//
			// 	if (props["data-default-range"]) {
			// 		let range = props["data-default-range"],
			// 			rangeValues = _.findWhere(Store.getConvenienceDates(), { name: range });
			//
			// 		this.setState({
			// 			defaultRange: rangeValues
			// 		});
			//
			// 		// moment.tz.setDefault(this.state.org_zone);
			//
			// 		_.delay(() => {
			// 			utils.dispatch(this, Constants.DATE_RANGE_DEFAULT, JSON.stringify(rangeValues));
			// 		}, 0);
			// 	}
			// }

		}, {
			key: "render",
			value: function render() {
				if (this.state.ready && this.state.timezone_diff) {
					return React.createElement(
						"div",
						null,
						React.createElement(
							"div",
							null,
							"You have a timezone diff, choose one ..."
						),
						React.createElement(
							"ul",
							null,
							React.createElement(
								"li",
								{ "data-id": this.state.timezones.device.id, onClick: this._onClick },
								"Device: ",
								this.state.timezones.device.id
							),
							React.createElement(
								"li",
								{ "data-id": this.state.timezones.organisation.id, onClick: this._onClick },
								"Organisation: ",
								this.state.timezones.organisation.id
							)
						)
					);
				} else {
					return React.createElement(
						"div",
						null,
						"Current time is ",
						moment().tz(this.state.use_zone).format("ddd DD MMM YYYY HH:mm")
					);
				}
			}
		}]);

		return Timezones;
	})(React.Component);

	exports["default"] = Timezones;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*! jstz - v1.0.4 - 2012-12-18 */
	"use strict";

	(function (e) {
	  var t = (function () {
	    "use strict";var e = "s",
	        n = function n(e) {
	      var t = -e.getTimezoneOffset();return t !== null ? t : 0;
	    },
	        r = function r(e, t, n) {
	      var r = new Date();return (e !== undefined && r.setFullYear(e), r.setDate(n), r.setMonth(t), r);
	    },
	        i = function i(e) {
	      return n(r(e, 0, 2));
	    },
	        s = function s(e) {
	      return n(r(e, 5, 2));
	    },
	        o = function o(e) {
	      var t = e.getMonth() > 7 ? s(e.getFullYear()) : i(e.getFullYear()),
	          r = n(e);return t - r !== 0;
	    },
	        u = function u() {
	      var t = i(),
	          n = s(),
	          r = i() - s();return r < 0 ? t + ",1" : r > 0 ? n + ",1," + e : t + ",0";
	    },
	        a = function a() {
	      var e = u();return new t.TimeZone(t.olson.timezones[e]);
	    },
	        f = function f(e) {
	      var t = new Date(2010, 6, 15, 1, 0, 0, 0),
	          n = { "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0), "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0), "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0), "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0), "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0), "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0), "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0), "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0), "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0), "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0), "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0), "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0), "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0), "Asia/Beirut": new Date(2011, 2, 27, 1, 0, 0, 0), "Europe/Helsinki": new Date(2011, 2, 27, 4, 0, 0, 0), "Europe/Istanbul": new Date(2011, 2, 28, 5, 0, 0, 0), "Asia/Damascus": new Date(2011, 3, 1, 2, 0, 0, 0), "Asia/Jerusalem": new Date(2011, 3, 1, 6, 0, 0, 0), "Asia/Gaza": new Date(2009, 2, 28, 0, 30, 0, 0), "Africa/Cairo": new Date(2009, 3, 25, 0, 30, 0, 0), "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0), "Pacific/Fiji": new Date(2010, 11, 29, 23, 0, 0, 0), "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0), "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0), "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0), "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0), "Europe/Moscow": t, "Asia/Yekaterinburg": t, "Asia/Omsk": t, "Asia/Krasnoyarsk": t, "Asia/Irkutsk": t, "Asia/Yakutsk": t, "Asia/Vladivostok": t, "Asia/Kamchatka": t, "Europe/Minsk": t, "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0) };return n[e];
	    };return { determine: a, date_is_dst: o, dst_start_for: f };
	  })();t.TimeZone = function (e) {
	    "use strict";var n = { "America/Denver": ["America/Denver", "America/Mazatlan"], "America/Chicago": ["America/Chicago", "America/Mexico_City"], "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"], "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"], "Asia/Beirut": ["Asia/Beirut", "Europe/Helsinki", "Europe/Istanbul", "Asia/Damascus", "Asia/Jerusalem", "Asia/Gaza"], "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"], "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"], "America/New_York": ["America/Havana", "America/New_York"], "America/Halifax": ["America/Goose_Bay", "America/Halifax"], "America/Godthab": ["America/Miquelon", "America/Godthab"], "Asia/Dubai": ["Europe/Moscow"], "Asia/Dhaka": ["Asia/Yekaterinburg"], "Asia/Jakarta": ["Asia/Omsk"], "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"], "Asia/Tokyo": ["Asia/Irkutsk"], "Australia/Brisbane": ["Asia/Yakutsk"], "Pacific/Noumea": ["Asia/Vladivostok"], "Pacific/Tarawa": ["Asia/Kamchatka"], "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"], "Asia/Baghdad": ["Europe/Minsk"] },
	        r = e,
	        i = function i() {
	      var e = n[r],
	          i = e.length,
	          s = 0,
	          o = e[0];for (; s < i; s += 1) {
	        o = e[s];if (t.date_is_dst(t.dst_start_for(o))) {
	          r = o;return;
	        }
	      }
	    },
	        s = function s() {
	      return typeof n[r] != "undefined";
	    };return (s() && i(), { name: function name() {
	        return r;
	      } });
	  }, t.olson = {}, t.olson.timezones = { "-720,0": "Etc/GMT+12", "-660,0": "Pacific/Pago_Pago", "-600,1": "America/Adak", "-600,0": "Pacific/Honolulu", "-570,0": "Pacific/Marquesas", "-540,0": "Pacific/Gambier", "-540,1": "America/Anchorage", "-480,1": "America/Los_Angeles", "-480,0": "Pacific/Pitcairn", "-420,0": "America/Phoenix", "-420,1": "America/Denver", "-360,0": "America/Guatemala", "-360,1": "America/Chicago", "-360,1,s": "Pacific/Easter", "-300,0": "America/Bogota", "-300,1": "America/New_York", "-270,0": "America/Caracas", "-240,1": "America/Halifax", "-240,0": "America/Santo_Domingo", "-240,1,s": "America/Santiago", "-210,1": "America/St_Johns", "-180,1": "America/Godthab", "-180,0": "America/Argentina/Buenos_Aires", "-180,1,s": "America/Montevideo", "-120,0": "Etc/GMT+2", "-120,1": "Etc/GMT+2", "-60,1": "Atlantic/Azores", "-60,0": "Atlantic/Cape_Verde", "0,0": "Etc/UTC", "0,1": "Europe/London", "60,1": "Europe/Berlin", "60,0": "Africa/Lagos", "60,1,s": "Africa/Windhoek", "120,1": "Asia/Beirut", "120,0": "Africa/Johannesburg", "180,0": "Asia/Baghdad", "180,1": "Europe/Moscow", "210,1": "Asia/Tehran", "240,0": "Asia/Dubai", "240,1": "Asia/Baku", "270,0": "Asia/Kabul", "300,1": "Asia/Yekaterinburg", "300,0": "Asia/Karachi", "330,0": "Asia/Kolkata", "345,0": "Asia/Kathmandu", "360,0": "Asia/Dhaka", "360,1": "Asia/Omsk", "390,0": "Asia/Rangoon", "420,1": "Asia/Krasnoyarsk", "420,0": "Asia/Jakarta", "480,0": "Asia/Shanghai", "480,1": "Asia/Irkutsk", "525,0": "Australia/Eucla", "525,1,s": "Australia/Eucla", "540,1": "Asia/Yakutsk", "540,0": "Asia/Tokyo", "570,0": "Australia/Darwin", "570,1,s": "Australia/Adelaide", "600,0": "Australia/Brisbane", "600,1": "Asia/Vladivostok", "600,1,s": "Australia/Sydney", "630,1,s": "Australia/Lord_Howe", "660,1": "Asia/Kamchatka", "660,0": "Pacific/Noumea", "690,0": "Pacific/Norfolk", "720,1,s": "Pacific/Auckland", "720,0": "Pacific/Tarawa", "765,1,s": "Pacific/Chatham", "780,0": "Pacific/Tongatapu", "780,1,s": "Pacific/Apia", "840,0": "Pacific/Kiritimati" },  true ? exports.jstz = t : e.jstz = t;
	})(undefined);

/***/ }
/******/ ])
});
;