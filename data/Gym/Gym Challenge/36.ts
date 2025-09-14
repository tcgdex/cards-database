import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Brock's Sandslash",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Sandshrew",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Swift",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Needle Ball",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			},

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
			type: "Lightning",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274304,
		tcgplayer: 83984
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		},
	]
}

export default card
