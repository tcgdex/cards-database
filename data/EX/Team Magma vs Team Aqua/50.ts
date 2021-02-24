import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Corphish",
	},
	illustrator: "Jungo Suzuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		341,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Toxic Grip",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
