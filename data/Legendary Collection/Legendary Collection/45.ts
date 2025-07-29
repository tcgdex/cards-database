import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Growlithe",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		58,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274810
	}
}

export default card
