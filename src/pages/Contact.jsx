import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Contact extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<Jumbotron title="Contato" subtitle="Página de Contato"/>
				<div className="container">
					<h2>Título contato!</h2>
					<p>texto aqui</p>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Contact;