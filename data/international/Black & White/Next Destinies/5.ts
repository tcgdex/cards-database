import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Shaymin-EX",
		'fr-fr': "Shaymin-EX",
		'es-es': "Shaymin-EX",
		'it-it': "Shaymin-EX",
		'pt-br': "Shaymin-EX",
		'de-de': "Shaymin-EX"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 110,
	types: [
		"Grass",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Synthesis",
				'fr-fr': "Synthèse",
			},
			effect: {
				'en-us': "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie Grass dans votre deck et attachez-la à 1 de vos Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Revenge Blast",
				'fr-fr': "Explo-Vengeance",
			},
			effect: {
				'en-us': "Does 30 more damage for each Prize card your opponent has taken.",
				'fr-fr': "Inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
