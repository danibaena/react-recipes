import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './Common/main.component.jsx'
import Recipe from './Recipe/recipe.component.jsx'
import RecipeDetail from './Recipe/recipe-detail.component.jsx'
import CreateRecipe from './Recipe/create-recipe.component.jsx'

const data = [
    {
        id: 1,
        name: 'Alioli',
        ingredients: [
            {
                name: 'Ajo',
                quantity: 'Dos cabezas'
            },
            {
                name: 'Aceite',
                quantity: '100 ml'
            }
        ],
        steps: [
            'Cut the garlic',
            'Put the garlic in a bowl with oil',
            'Mix it up with a Moulinex',
            'Serve & eat!'
        ]
    }
];

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Recipe} data={data}/>
            <Route path="/recipes/:id" component={RecipeDetail} data={data}/>
            <Route path="/create-recipe" component={CreateRecipe}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
