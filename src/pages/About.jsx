import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<Jumbotron title="Sobre" subtitle="Página Sobre"/>
				<div className="container">
					<h2>Título sobre!</h2>
					<p>texto aqui</p>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default About;