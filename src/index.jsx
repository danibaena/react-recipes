import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './Common/main.component.jsx'
import Recipe from './Recipe/recipe.component.jsx'
import RecipeDetail from './Recipe/recipe-detail.component.jsx'
import CreateRecipe from './Recipe/create-recipe.component.jsx'

const data = [{
  id: 1,
  name: 'Alioli',
  ingredients: [{
    name: 'Garlic',
    quantity: '2 heads'
  }, {
    name: 'Oil',
    quantity: '100 ml'
  }],
  steps: [
    'Cut the garlic',
    'Put the garlic in a bowl with oil',
    'Mix it up with a Moulinex',
    'Serve & eat!'
  ]
}, {
  id: 2,
  name: 'Gazpacho',
  ingredients: [{
    name: 'Tomato',
    quantity: 'Plenty'
  }, {
    name: 'Oil',
    quantity: 'All of it'
  }, {
    name: 'Vinager',
    quantity: 'Safe quantity'
  }, {
    name: 'Salt',
    quantity: 'Just the tip'
  }, {
    name: 'Pepper',
    quantity: 'Big one'
  }, {
    name: 'Onions',
    quantity: 'Enough to make you cry'
  }],
  steps: [
    'Cut and clean the vegetables',
    'Use an unicorn horn to perform the magic',
    'Let it refresh in the fridge for about 2 hours',
    'Serve & eat!'
  ]
}];

render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Recipe} data={data}/>
        <Route path="/recipes/:id" component={RecipeDetail} data={data}/>
        <Route path="/create-recipe" component={CreateRecipe} data={data}/>
      </Route>
  </Router>,
  document.getElementById('container')
);
