import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BaseRouter from "./routes";
import ReactDOM from "react-dom";

import Navigation from "./Navbar.js";

import AddRestaurant from "./components/AddRestaurant";
import SideBar from "./components/Sidebar";
import Trending from "./components/Trending";
// import Swiper from "react-id-swiper/lib/custom";

import Example from "./components/ReactIdswiper";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/homepage.css";
import "./css/navbar.css";
import "./css/sidebar-styles.css";
import "./css/swiper.css";
import "./css/list.css";
import "./css/antdstyle.css";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";

function Index() {
  return (
    <div>
      <AddRestaurant
        requestType="post"
        restaurantID={null}
        btnText="Create Here"
      />
    </div>
  );
}
function ArticlePage() {
  return (
    <div>
      <BaseRouter />
    </div>
  );
}
function TrendingPage() {
  return (
    <div>
      <Trending />
    </div>
  );
}

function App() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        {/* <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/homepage.css" rel="stylesheet" />
        <link href="jumbotron.css" rel="stylesheet" /> */}
        <body>
          <Navigation />
          <Router>
            <Route path="/Trending" component={TrendingPage} />{" "}
            <Route path="/:articleID" component={ArticlePage} />
            {""}
            <Route
              exact={true}
              path="/"
              render={() => (
                <div className="routeBreak">
                  <div className="container-fluid container2">
                    <image
                      src="website-mock-up/HatchfulExport-All/logo_transparent.png"
                      id="logo"
                      alt="Responsive image"
                    />
                  </div>
                  <div class="Border">
                    <div className="breathingroom">
                      {" "}
                      <h1>
                        {" "}
                        We Found The{" "}
                        <span
                          style={{
                            textDecorationLine: "underline",
                            color: "rgb(191, 172, 3)"
                          }}
                        >
                          Best
                        </span>{" "}
                        Places So You Don't Have To Waste Your Time With The
                        <s style={{ color: "red" }}> Rest </s>!
                      </h1>
                      <div class="card">
                        <div class="card-body">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Lorem ipsum dolor sit amet.
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Example className="slider" />
                  <div className="Antdlist" id="Antdliststyle">
                    <Router>
                      <BaseRouter />
                    </Router>
                  </div>
                </div>
                // end router
              )}
            />
          </Router>
          <div className="bottomBar">
            {" "}
            <Router>
              <ul>
                <li>
                  <Link to="/AddPost/">AddPost</Link>
                </li>
              </ul>
              <Route path="/AddPost/" exact={true} component={Index} />
            </Router>
            <p>2019 Vaitoonkiat Ltd (SVS)</p>
          </div>
        </body>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
