import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<Jumbotron title="Bem vindo!" subtitle="Obrigado por chegar até aqui!"/>
				<div className="container">
					<h2>Título home</h2>
					<p>Esta é nossa página inicial.</p>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Home;