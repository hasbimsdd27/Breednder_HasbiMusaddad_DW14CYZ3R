import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import IndexAPP from "./pages/Index";
import ProfileAPP from "./pages/Profile";
import EditAPP from "./pages/Edit";

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

function LandingPage() {
  return <Landing />;
}

function Profile() {
  return <ProfileAPP />;
}

function Main() {
  return <IndexAPP />;
}

function Edit() {
  return <EditAPP />;
}
