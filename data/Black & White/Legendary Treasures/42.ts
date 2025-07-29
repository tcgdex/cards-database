import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Seismitoad",
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		537,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Palpitoad",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
			},
			effect: {
				en: "Does 30 damage times the number of your Pokémon that have the Round attack.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
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

	retreat: 3,

	thirdParty: {
		cardmarket: 281193
	}
}

export default card
