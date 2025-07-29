import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
	},

	illustrator: "Hasuno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 100,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sharp Scythe",
				fr: "Faucille Acérée",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 394672
	}
}

export default card
