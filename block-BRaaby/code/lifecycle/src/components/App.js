import React from "react";
import Lifecycle from "./Lifecycle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      text: "",
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          data: data,
          text: data.results[0].name.title + " " + data.results[0].name.first,
        })
      );
  }
  render() {
    let user = this.state.data.results[0];
    
    return (
      <>
        {/* {this.state.data.results.map((elm) => {
            return <li>{elm.gender}</li>;
          })} */}
      </>
    );
  }
}
export default App;
