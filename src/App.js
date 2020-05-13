import React from 'react';
import { useSelector, connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { buyItem } from './actions/buyItem';
import { removeFeature } from './actions/removeFeature';

const App = (props) => {
  // console.log('props in app: ', props);
  const allOfState = useSelector((state) => state);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={allOfState.car} />
        <AddedFeatures
          car={allOfState.car}
          removeFeature={props.removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={allOfState.additionalFeatures}
          buyItem={props.buyItem}
        />
        <Total
          car={allOfState.car}
          additionalPrice={allOfState.additionalPrice}
        />
      </div>
    </div>
  );
};

// ????????? How do you use useDispatch if it is not actually being dispateched? Also how do you do useSelector
// instead of mapStateToProps but still have access to actions?...will connect break if you don't do mapStateToProps?

export default connect(null, { buyItem, removeFeature })(App);
