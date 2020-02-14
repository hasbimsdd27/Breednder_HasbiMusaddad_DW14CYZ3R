import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import IndexAPP from "./pages/Index";
import ProfileAPP from "./pages/Profile";
import EditAPP from "./pages/Edit";
import CobaAPP from "./pages/Coba";
import AddAPP from "./pages/Add";
import { AnimatedSwitch } from "react-router-transition";

export default function App() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/coba">
          <Coba />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>

        <Route path="/add">
          <Add />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </AnimatedSwitch>
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
function Coba() {
  return <CobaAPP />;
}
function Add() {
  return <AddAPP />;
}
