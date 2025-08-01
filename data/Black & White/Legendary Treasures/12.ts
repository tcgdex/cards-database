import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Leavanny",
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		542,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Swadloon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Leaf Tailor",
			},
			effect: {
				en: "Each of your Pokémon that has any Energy attached to it has no Weakness.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Arm",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281163,
		tcgplayer: 86689
	}
}

export default card
