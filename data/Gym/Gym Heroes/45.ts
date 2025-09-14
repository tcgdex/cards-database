import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Gloom",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Oddish",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Healing Pollen",
			},
			effect: {
				en: "Flip a coin. If heads, remove 4 damage counters from Erika's Gloom. If Erika's Gloom has fewer damage counters than that, remove all of them.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Magic Pollen",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep, Confused, Paralyzed, or Poisoned (your choice).",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274181,
		tcgplayer: 85295
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

