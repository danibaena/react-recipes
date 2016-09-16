import React, { Component } from 'react';

class CreateRecipe extends Component {
    render(){
        return (
            <div>
                <h1>Create recipe</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                    	<form className="form-inline">
                    		<h4>Ingredients / Quantity:</h4>
                    		<div className="col-md-4 form-group">
   						 		<label for="name">Ingredient:</label>
   						 		<input type="text" className="form-control" id="name"/>
   						 	</div>
   						 	<div className="col-md-4 form-group">
   						 		<label for="quantity">Quantity:</label>
   						 		<input type="text" className="form-control" id="quantity"/>
   						 	</div>
   						 	<div className="col-md-4 form-group">
   						 		<button type="submit" className="btn btn-default">Add</button>
   						 	</div>
   						</form>
					</div>
                    <div className="col-sm-6 col-md-4">
                    	<form className="form-inline">
                    		<h4>Steps:</h4>
                    		<textarea className="col-md-4 form-control" rows="5" id="steps"></textarea>
   						 	<div className="col-md-6 col-md-8">
   						 		<button type="submit" className="btn btn-default">Add</button>
   						 	</div>
   						</form>
                    </div>
                </div>
                <div className="row">
                	<div className="col-sm-6 col-md-4 form-group">
						<div className="panel panel-default">
                            <div className="panel-body">
                            	HOLA
                            </div>
                         </div>
					</div>
                    <div className="col-sm-6 col-md-4 form-group">
                    	<div className="panel panel-default">
                            <div className="panel-body">
                            	HOLA
                            </div>
                        </div>
                    </div>
					<div className="col-sm-6 col-md-4">
   						<button type="submit" className="btn btn-default">Create recipe</button>
   					</div>
                </div>
           </div>
        ); 
    }
}

export default CreateRecipe