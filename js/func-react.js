var Card = React.createClass({

	getInitialState : function(){
		return {
			logo: "bl-prod-outubro.png",
			text: "Primeiro aplicativo react.js"
		}
	},
	
	changeCard : function(){
	
		this.setState({
			logo: "snorlano.png",
			text: "Há! Snorlano S2"
		})
	
	},
	
	render : function(){
		var image = 'img/' + this.state.logo;
		return (
			<div className='Card'>
				<img src={image} alt='' />
				<p>{this.state.text}</p>
				<button onClick={this.changeCard}>Just do it!</button>
			</div>
		)
	}
})
React.render( <Card/>,document.getElementById('card'))