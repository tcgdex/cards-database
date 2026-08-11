import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Professor Oak’s Setup",
		'fr-fr': "Installation du Professeur Chen",
		'es-es': "Disposición del Profesor Oak",
		'it-it': "Allestimento del Professor Oak",
		'pt-br': "Preparação do Professor Carvalho",
		'de-de': "Professor Eichs Vorbereitung"
	},
	illustrator: "Nabana Kensaku",
	rarity: "Ultra Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Cherchez jusqu’à 3 Pokémon de base de types différents dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 3 Basic Pokémon of different types and put them onto your Bench. Then, shuffle your deck.",
		'es-es': "Busca en tu baraja hasta 3 Pokémon Básicos de diferentes tipos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Base di tipo diverso e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 3 Pokémon Básicos de tipos diferentes no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon verschiedenen Typs und lege sie auf deine Bank. Mische anschließend dein Deck."
	},
	trainerType: "Supporter",

}

export default card
