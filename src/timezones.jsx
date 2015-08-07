import styles from "./TimezonesStyle.css";
import {jstz} from "./jstz.min";

export default class Timezones extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			locale: moment.locale(),
			ready: false,
			use_zone: jstz.determine().name(),
			timezone_diff: false
		};

		this._onClick = this._onClick.bind(this);
	}

	componentWillMount() {
		let attributes = this.props.element.attributes,
			device_tz = jstz.determine().name(),
			org_tz = device_tz;

		Object.keys(attributes).forEach((key) => {
			let namedNode;

			if (key !== "length") {
				namedNode = attributes[key];
				if (namedNode.name === "data-org-timezone") {
					if (namedNode.name !== device_tz) {
						org_tz = namedNode.value;
						this.setState({ timezone_diff: true });
					}
				}
			}
		});

		_.delay(() => {
			let now_local = moment().tz(device_tz),
				now_org = moment().tz(org_tz);

			let init = {
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
			this.setState({ timezones: init, ready: true, use_zone: init.device.id });
			// utils.dispatch(this, Constants.INIT, JSON.stringify(init));
		}, 0);
	}

	componentDidMount() {
		// return utils.componentDidMount(this);

	}

	_onClick(e) {
		let id = e.currentTarget.getAttribute("data-id");
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

	render() {
		if (this.state.ready && this.state.timezone_diff) {
			return (
				<div>
					<div>You have a timezone diff, choose one ...</div>
					<ul>
						<li data-id={this.state.timezones.device.id} onClick={this._onClick}>Device: {this.state.timezones.device.id}</li>
						<li data-id={this.state.timezones.organisation.id} onClick={this._onClick}>Organisation: {this.state.timezones.organisation.id}</li>
					</ul>
				</div>
			);
		} else {
			return (
				<div>Current time is {moment().tz(this.state.use_zone).format("ddd DD MMM YYYY HH:mm")}</div>
			);
		}
	}
}
