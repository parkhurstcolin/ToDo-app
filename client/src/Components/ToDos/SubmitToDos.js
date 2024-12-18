import _ from "lodash";
import React, { Component } from "react";
import toDoFields from "./toDoFields";
import Fields from "./Fields";

class ToDos extends Component {
	renderFields() {
		return _.map(toDoFields, ({ label, name }) => {
			return (
				<Fields
					component={toDoFields}
					type="text"
					label={label}
					name={name}
					key={name}
				/>
			);
		});
	}
	render() {
		return (
			<div>
				<div className="flex">
					<h1 className="text-3xl my-1 p-1">New To Do:</h1>
				</div>
				<form onSubmit={this.submitHandler}>
					{this.renderFields()}
					<button
						className="b-0 m-1 p-2 bg-green-500 float-right rounded hover:bg-green-400"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default ToDos;
