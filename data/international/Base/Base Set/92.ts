import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Energy Removal",
		'fr-fr': "Suppression d'Énergie",
		'de-de': "Energie-Absauger",
		'it-it': "Distruzione di Energia"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it.",
		'fr-fr': "Choisissez 1 carte Énergie attachée à 1 des Pokémon de votre adversaire et défaussez-la.",
		'de-de': "Wähle eine auf einem Pokémon Deines gegners abgelegte Energiekarte und entferne sie.",
		'it-it': "Scegli una carta Energia assegnata a uno dei Pokémon del tuo avversario e scartala."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273787,
				tcgplayer: 42436
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107089
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107089
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
