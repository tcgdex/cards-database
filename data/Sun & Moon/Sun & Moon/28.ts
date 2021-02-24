import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
	],
	hp: 70,
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
				en: "Confusion Wave",
				fr: "Vague de Confusion",
			},
			effect: {
				en: "Both Active Pokémon are now Confused.",
				fr: "Les deux Pokémon Actifs sont maintenant Confus.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
