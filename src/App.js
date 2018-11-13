import React, { Component } from "react";

import Content from "./components/Content";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import PopularActivities from "./components/PopularActivities";
import generatePopularActivities from "./fakedata/popularActivities";

const popularActivities = generatePopularActivities(12);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content>
          <PageHeader>Popular activities</PageHeader>
          <PopularActivities items={popularActivities} />
        </Content>
      </div>
    );
  }
}

export default App;
