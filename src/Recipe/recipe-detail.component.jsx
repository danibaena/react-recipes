import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class RecipeDetail extends Component {
    handleRedirect(){
        browserHistory.push('/recipes');
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
                <h1>{recipe[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={recipe[0].media} alt={recipe[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {recipe[0].model}</li>
                           <li><strong>Make</strong>: {recipe[0].make}</li>
                           <li><strong>Year</strong>: {recipe[0].year}</li>
                           <li><strong>Price</strong>: {recipe[0].price}</li>
                       </ul>
                       <ol>
                            <li><strong>Steps</strong>: {recipe[0].steps}</li>
                       </ol>
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