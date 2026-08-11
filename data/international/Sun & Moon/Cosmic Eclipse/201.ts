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
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,

	effect: {
		'fr-fr': "Cherchez jusqu’à 3 Pokémon de base de types différents dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 3 Basic Pokémon of different types and put them onto your Bench. Then, shuffle your deck.",
		'es-es': "",
		'it-it': "",
		'pt-br': "",
		'de-de': ""
	},
	trainerType: "Supporter",

}

export default card
