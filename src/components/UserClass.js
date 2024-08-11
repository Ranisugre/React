import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    // console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RANISUGRE");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
    // console.log(this.props.name + "child componentDidMount");
  }

  render() {
    // console.log(this.props.name + "child rendered");
    return (
      <>
        <div className="user-fun">
          <h2>{this.state.userInfo.name}</h2>
          <h2>Name:{this.props.name}</h2>
          <h3>Location:{this.props.location}</h3>
        </div>
      </>
    );
  }
}
export default UserClass;
