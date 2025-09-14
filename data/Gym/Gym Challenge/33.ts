import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine's Rapidash",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		78,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Ponyta",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Mane",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stamp",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage (to the Defending Pokémon) and 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, this attack does 30 damage (to the Defending Pokémon.)",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274301,
		tcgplayer: 83882
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
