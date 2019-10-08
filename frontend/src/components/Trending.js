import React, { Component } from "react";
import "../css/trending.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BaseRouter from "../routes";

import TrendingList from "../containers/TrendingListView";
import ArticleDetail from "../containers/ArticleDetailView";

export class Trending extends Component {
  render() {
    return (
      <main role="main" class="container">
        <div class="row">
          <div class="col-md-12 blog-main">
            <h3 class="pb-4 mb-4 font-italic border-bottom">
              Top trending restaurants
            </h3>

            <div class="blog-post">
              <h2 class="blog-post-title">Rest Name</h2>
              <p class="blog-post-meta">
                January 1, 2014 by <a href="#">Mark</a>
              </p>

              <p>
                This Page is where you'll find the places generating the most
                buzz. If you're in the mood for a guaranteed great place to eat,
                you're in the right place. The query calling that restaurant is
                equivalent to: <br />
                <br />"VIEW `trend` AS SELECT `e`.`restname` AS `restname`,
                `e`.`rating` AS `rating` FROM (SELECT `d`.`restname` AS
                `restname`, `d`.`rating` AS `rating` FROM (SELECT `c`.`restname`
                AS `restname`, AVG(`c`.`rating`) AS `rating` FROM (SELECT
                `a`.`fname` AS `fname`, `a`.`lname` AS `lname`, `b`.`restname`
                AS `restname`, `b`.`rating` AS `rating` FROM (`user` `a` JOIN
                (SELECT `ratings`.`userid` AS `userid`, `ratings`.`rating` AS
                `rating`, `restaurants`.`restname` AS `restname` FROM (`ratings`
                JOIN `restaurants` ON ((`restaurants`.`restid` =
                `ratings`.`restid`)))) `b` ON ((`a`.`userid` = `b`.`userid`))))
                `c` GROUP BY `c`.`restname`) `d` WHERE (`d`.`rating` > 4.0)
                ORDER BY `d`.`rating`) `e`"
              </p>
              <p>
                Cum sociis natoque penatibus et magnis{" "}
                <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis.
                Cras mattis consectetur purus sit amet fermentum.
              </p>

              <p>
                Curabitur blandit tempus porttitor.{" "}
                <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
              <br />

              <TrendingList />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Trending;
