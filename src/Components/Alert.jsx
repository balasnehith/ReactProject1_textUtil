import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div className={`container-fluid alert alert-${props.alert.msgStatus} m-0 position-fixed text-center`} style={{zIndex: 1}}>
        <strong>{props.alert.msgStatus}:</strong>&nbsp;{props.alert.msg}
      </div>
    )
  );
}
