import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Burmy Trash Cloak",
		'de-de': "Burmy Lumpenumhang"
	},

	illustrator: "Yukiko Baba",
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
				'en-us': "Burmy Trash Cloak can evolve during the turn you play it.",
				'de-de': "Burmy Lumpenumhang kann in dem Zug entwickelt werden, in dem du es gespielt hast."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
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
				tcgplayer: 84057,
				cardmarket: 278930
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278930,
				tcgplayer: 84057
			}
		},
	],

}

export default card
