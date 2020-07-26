import React from "react";

export default class Entry extends React.Component {
  render() {
    if (this.props.entry) {
      return (
        <div data-id={this.props.entry.id}>
          <h2>{this.props.entry.title}</h2>
          <p>{this.props.entry.contents}</p>
        </div>
      );
    }

    return null;
  }
}
