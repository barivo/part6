import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector(state => state.notifications);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  if (notification.data) {
    return <div style={style}>{notification.data}</div>;
  } else return <div></div>;
};

export default Notification;
