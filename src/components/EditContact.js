import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, first_name, last_name, birthday, description, phone, email } =
      props.location.state.contact;
    this.state = {
      id,
      first_name,
      last_name,
      birthday,
      description,
      phone,
      email,
    };
  }

  update = (e) => {
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
    this.props.updateContactHandler(this.state);
    this.setState({
      first_name: "",
      last_name: "",
      birthday: "",
      description: "",
      phone: "",
      email: "",
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button teal">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
