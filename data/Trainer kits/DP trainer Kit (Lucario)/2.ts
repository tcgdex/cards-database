import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [75],
	set: Set,

	name: {
		en: "Graveler"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Geodude",
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless"
			],
			name: {
				en: "Rock Cannon"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads."
			},
			damage: "30×"
		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Rock Slide"
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: "40"
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "20+"
		}
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		}
	],

	description: {
		en: "GRAVELER make their homes on sheer cliff faces by gouging out numerous horizontal holes."
	},

	retreat: 3
}

export default card
