import React from 'react';

const AddedFeature = (props) => {
  // console.log('props in addedfeature: ', props);
  return (
    <li>
      <button
        className="button"
        onClick={() => {
          props.removeFeature(props.feature);
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
