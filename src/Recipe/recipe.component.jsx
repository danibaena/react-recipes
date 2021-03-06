import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class Recipe extends Component {
  handleRedirect() {
    browserHistory.push('/create-recipe');
  }
  render() {
    // Get data from route props
    const recipes = this.props.route.data;
    // Map through cars and return linked cars
    const recipeNode = recipes.map((recipe) => {
      return (
        <Link
          to={"/recipes/"+recipe.id}
          className="list-group-item"
          key={recipe.id}>
          {recipe.name}
        </Link>
      )
    });
    return (
      <div>
        <h1>Recipes</h1>
            <div className="row">
            <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="col-md-8 list-group">
                            {recipeNode}
                        </div>
                    </div>
                 </div>
            <div className="col-md-8">
                <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Create recipe</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Recipe
