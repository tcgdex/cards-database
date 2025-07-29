import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Cherrim",
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
		en: "Cherubi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Worry Seed",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Magical Leaf",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and remove 3 damage counters from Cherrim.",
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
		en: "It blooms during times of strong sunlight. It tries to make up for everything it endured as a bud."
	},

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278407
	}
}

export default card
