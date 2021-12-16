import React from "react";

class AddContact extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    birthday: "",
    description: "",
    phone: "",
    email: "",
    owner_id: "",
    created_date: new Date().toTimeString().slice(0, 8),
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.first_name === "" ||
      this.state.last_name === "" ||
      this.state.phone === "" ||
      this.state.description === "" ||
      this.state.email === "" ||
      this.state.birthday === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({
      first_name: "",
      last_name: "",
      birthday: "",
      description: "",
      phone: "",
      email: "",
      owner_id: "",
      created_date: new Date().toTimeString().slice(0, 8),
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={this.state.first_name}
              onChange={(e) => this.setState({ first_name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="name"
              placeholder="Last Name"
              value={this.state.last_name}
              onChange={(e) => this.setState({ last_name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Birthday</label>
            <input
              type="text"
              name="name"
              placeholder="Birthday"
              value={this.state.birthday}
              onChange={(e) => this.setState({ birthday: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="name"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="name"
              placeholder="Phone"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
