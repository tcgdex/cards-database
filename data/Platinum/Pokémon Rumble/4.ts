import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Heatran",
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Boiler",
			},
			effect: {
				en: "If the Defending Pokémon is a Water Pokémon, this attack does 60 damage plus 40 more damage.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 278845
	}
}

export default card
