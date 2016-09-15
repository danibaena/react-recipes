import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class RecipeDetail extends Component {
    handleRedirect(){
        browserHistory.push('/');
    }
    render(){
        const Recipes = this.props.route.data;
        const id = this.props.params.id;
        const recipe = Recipes.filter(recipe => {
            if(recipe.id == id) {
                return recipe;
            }
        });

        return (
            <div>
                <h1>Recipe details for: {recipe[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4 list-group">
                    <h2>Ingredients / Quantity</h2>
                        <ul>
                            <li>{recipe[0].id}</li>
                       </ul>
                    </div>
                    <div className="col-sm-6 col-md-4 list-group">
                        <h2>Steps</h2>
                        <ul>
                           <li>{recipe[0].id}</li>
                        </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Recipes</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default RecipeDetail