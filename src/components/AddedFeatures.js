import React from 'react';
import { useSelector } from 'react-redux';
import AddedFeature from './AddedFeature';

const AddedFeatures = (props) => {
  // console.log('props in addedFEATURE: ', props);
  // //props = car, removeFeature
  const carFromState = useSelector((state) => state.car);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {carFromState.features.length ? (
        <ol type="1">
          {carFromState.features.map((item) => (
            <AddedFeature
              key={item.id}
              feature={item}
              removeFeature={props.removeFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
