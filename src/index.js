"use strict";

// Polyfill CustomEvent for IE
try {
	new CustomEvent("test");
} catch(e) {
	let CustomEvent = (event, params) => {
		let evt;
		params = params || {
			bubbles: false,
			cancelable: false,
			detail: undefined
		};

		evt = document.createEvent("CustomEvent");
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	};

	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
}

import Timezones from "./timezones.jsx";

let renderHandler = () => {
	let reactComp = document.getElementsByTagName("react-timezones"),
		classComp = document.getElementsByClassName("react-timezones");

	Array.prototype.forEach.call(reactComp, (el) => {
	    React.render(<Timezones element={el} />, el);
	});

	Array.prototype.forEach.call(classComp, (el) => {
	    React.render(<Timezones element={el} />, el);
	});
};

if (typeof document !== "undefined") {
	renderHandler();
}

document.addEventListener("render", renderHandler);

export default Timezones;
