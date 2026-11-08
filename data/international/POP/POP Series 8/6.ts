import { Card } from 'models/database/card'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		'en-us': "Cherrim",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		421,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cherubi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Worry Seed",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Magical Leaf",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and remove 3 damage counters from Cherrim.",
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	description: {
		'en-us': "It blooms during times of strong sunlight. It tries to make up for everything it endured as a bud."
	},

	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278407,
				tcgplayer: 84253
			}
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278407,
				tcgplayer: 84253
			}
		},
	],
}

export default card
