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
        const ingredients = recipe[0].ingredients.map(ingredient => {
            return (<li>{ingredient.name} {ingredient.quantity}</li>);
        });
        const steps = recipe[0].steps.map(step => {
            return (<li>{step}</li>);
        });

        return (
            <div>
                <h1>Recipe details for: {recipe[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                    <h4>Ingredients / Quantity</h4>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <ul>
                                    {ingredients}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <h4>Steps</h4>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <ol>
                                    {steps}
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go back to Recipes</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default RecipeDetail