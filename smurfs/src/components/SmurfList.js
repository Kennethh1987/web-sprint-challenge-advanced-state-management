import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

const SmurfList = props => {
  useEffect(() => {
    props.fetchSmurfs(props);
  }, []);

  return (
    <div className="list-container">
      <div className="list">
        {props.smurfs.map(smurf => {
          return <SmurfCard key={smurf.id} smurf={smurf} value={smurf.value} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);