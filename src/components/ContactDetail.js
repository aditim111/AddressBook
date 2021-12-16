import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = (props) => {
  const {
    first_name,
    last_name,
    birthday,
    description,
    phone,
    email,
    created_date,
  } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{first_name}</div>
          <div className="description">{last_name}</div>
          <div className="description">{birthday}</div>
          <div className="description">{description}</div>
          <div className="description">{phone}</div>
          <div className="description">{email}</div>
          <div className="description">{created_date}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
