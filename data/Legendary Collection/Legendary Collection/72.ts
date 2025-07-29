import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Dratini",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
			},

			damage: 10,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274837
	}
}

export default card
