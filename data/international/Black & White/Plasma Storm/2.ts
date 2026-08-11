import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
		'es-es': "Grotle",
		'it-it': "Grotle",
		'pt-br': "Grotle",
		'de-de': "Chelcarain"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		388,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Away",
				'fr-fr': "Asticotage",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 40,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It knows where pure water wells up. It carries fellow Pokémon there on its back.",
	},

	thirdParty: {
		cardmarket: 280742,
		tcgplayer: 85920
	}
}

export default card
