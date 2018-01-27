import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
    

  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruit()
    
  }
  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }
  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }
  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }
  
  // componentDidMount() {
  //   fetch('/api/fruit')
  //     .then(response => response.json())
  //     .then(items => this.setState({ items }));
  // }
  

  render(){
    return(
    <FruitBasket filters={this.state.filters} onUpdateFilter={this.handleFilterChange} handleChange={this.state.handleFilterChange} currentFilter = {this.state.currentFilter}/>
    )
  }
}

export default App;
