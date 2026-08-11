import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock's Golem"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [76],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Graveler"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Slide"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose up to 3 of them. This attack does 10 damgae to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fissure"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 4,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83967,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83967,
				cardmarket: 274156
			}
		}
	],
}

export default card
