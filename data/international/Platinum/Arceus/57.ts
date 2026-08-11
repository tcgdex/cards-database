import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Burmy Sandy Cloak",
		'de-de': "Burmy Sandumhang"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [412],
	
	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Cloak Evolution",
				'de-de': "Umhang-Evolution"
			},
			effect: {
				'en-us': "Burmy Sandy Cloak can evolve during the turn you play it.",
				'de-de': "Burmy Sandumhang kann in dem Zug entwickelt werden, in dem du es gespielt hast."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Even if it is born where there are no cocooning materials, it somehow always ends up with a cloak."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84055,
				cardmarket: 278929
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278929,
				tcgplayer: 84055
			}
		},
	],

}

export default card
