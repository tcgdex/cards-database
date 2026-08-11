import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Corsola",
		'fr-fr': "Corsola"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [222],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rally",
				'fr-fr': "Regroupement"
			},
			effect: {
				'en-us': "Search your deck for up to 3 different types of Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck jusqu'à 3 types de Pokémon de base différents et placez-les sur votre Banc. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hook",
				'fr-fr': "Crochet"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],
	description: {
		'en-us': "Many live in the clean seas of the south. They apparently can’t live in polluted waters."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84442,
				cardmarket: 278045
			},
		},
	],

}

export default card
