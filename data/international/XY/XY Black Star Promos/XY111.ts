import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call of Time",
				'fr-fr': "Appel du Temps",
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck une carte Évolution de l'un de vos Pokémon et placez-la sur ce dernier. (Cela équivaut à faire évoluer le Pokémon.) Mélangez ensuite votre deck.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has the power to travel across time, but it is said to appear only in peaceful times.",
	},

	thirdParty: {
		cardmarket: 289560
	}
}

export default card
