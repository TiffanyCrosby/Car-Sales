import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFeature } from '../actions/removeFeature';

const AddedFeature = (props) => {
  console.log('props in addedfeature: ', props);
  // const carFeatures = useSelector(state => state.car.features)
  const dispatch = useDispatch();
  return (
    <li>
      <button
        className="button"
        onClick={() => dispatch(removeFeature(props.feature))}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
