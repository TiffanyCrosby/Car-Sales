import React from 'react';
import { useDispatch } from 'react-redux';
import { buyItem } from '../actions/buyItem';

const AdditionalFeature = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      <button
        className="button"
        onClick={() => {
          dispatch(buyItem(props.feature));
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
