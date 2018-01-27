import React   from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {
  console.log(props)

    return (
      <div className="fruit-basket">
        <Filter filters={props.filters} handleChange={props.onUpdateFilter} />
        <FilteredFruitList
          fruit={props.fruit}
          filter={props.currentFilter} />
      </div>
    );
  }
    FruitBasket.defaultProps = {
      fruit: [],
      filters: [],
      currentFilter: null,
      updateFilterCallback: []
    }


export default FruitBasket;