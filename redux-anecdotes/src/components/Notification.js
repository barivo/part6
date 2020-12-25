import React from "react";
import { connect } from "react-redux";
const style = {
  border: "solid",
  padding: 10,
  borderWidth: 1
};

const Notification = props => {
  if (props.notifications.data) {
    return <div style={style}>{props.notifications.data}</div>;
  } else return <div></div>;
};

const mapStateToProps = state => {
  return {
    notifications: state.notifications
  };
};

const ConnectedNotification = connect(mapStateToProps)(Notification);

export default ConnectedNotification;
