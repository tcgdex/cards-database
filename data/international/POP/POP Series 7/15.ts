import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Ralts",
		'fr-fr': "Ralts"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [280],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	description: {
		'en-us': "It uses the horns on its head to sense human emotions. It is said to appear in front of cheerful people."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88562,
				cardmarket: 278047
			},
		},
		{
			type: "normal",
			stamp: ['jason-klaczynski'],
			thirdParty: {
				tcgplayer: 479810,
				cardmarket: 869278
			},
		},
	],

}

export default card
