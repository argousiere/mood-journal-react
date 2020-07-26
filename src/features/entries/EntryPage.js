import React from "react";
import { connect } from "react-redux";
import { entrySlice } from "./slice";

class EntryPage extends React.Component {
  componentDidMount() {
    console.log(this.props);

    this.props.getEntry({
      entries: this.props.entries,
      id: this.props.entryId
    });
  }

  componentDidUpdate() {
    console.log("update", this.props);
  }

  render() {
    if (!this.props.entry) {
      return <div>Failed to load entry</div>;
    }

    return (
      <article>
        <h2>{this.props.entry.title}</h2>
        <p>{this.props.entry.contents}</p>
      </article>
    );
  }
}

const mapStateToProps = (state, origProps) => ({
  entryId: origProps.match.params.entryId,
  entries: state.entries,
  entry: state.entry
});

export default connect(
  mapStateToProps,
  { getEntry: entrySlice.actions.getEntry }
)(EntryPage);
