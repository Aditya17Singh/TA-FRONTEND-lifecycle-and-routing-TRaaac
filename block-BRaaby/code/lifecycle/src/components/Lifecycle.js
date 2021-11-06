import React from "react";

class Lifecycle extends React.Component {
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
      .then((data) => this.setState({ data: data }));
  }
  render() {
    // console.log(this.state.data.results[0]);
    return (
      <>
        {/* {this.state.data.results.map((elm) => {
          return <li>{elm.gender}</li>;
        })} */}
      </>
    );
  }
}
export default Lifecycle;
