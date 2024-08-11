import React from "react";
import UserClass from "./components/UserClass";
import Userfun from "./components/Userfun";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent component Did Mount");
  }
  render() {
    // console.log("parent render");
    return (
      <>
        <h1>About</h1>
        <h2>This is namaste react webseries</h2>

        <UserClass name={"Rani prakash(cls)"} location={"hyderabad"} />
      </>
    );
  }
}
export default About;
