import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Misty's Gyarados",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Rebellion",
			},
			effect: {
				en: "Whenever Misty's Gyarados attacks, flip 2 coins. If both of them are tails, that attack does nothing. Instead, shuffle Misty's Gyarados and all cards attached to it into your deck. (This power works even if Misty's Gyarados is Confused.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Tidal Wave",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274281
	}
}

export default card
