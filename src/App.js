import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import EntriesPage from "./features/entries/EntriesPage";
import TagsPage from "./features/tags/TagsPage";
import Navbar from "./Navbar";
import "./styles.css";
import EntryPage from "./features/entries/EntryPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <h1>Mood Journal</h1>
        <Navbar />

        <Switch>
          <Route path="/tags">
            <TagsPage />
          </Route>
          <Route path="/entries/:entryId" component={EntryPage} />
          <Route path="/">
            <EntriesPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
