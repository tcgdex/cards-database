import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Horsea",
		fr: "Hypotrempe"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		116,
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
				"Colorless",
			],
			name: {
				en: "Reverse Thrust",
				fr: "Poussée inverse"
			},
			effect: {
				en: "Switch Horsea with 1 of your Benched Pokémon, if any.",
				fr: "Échangez Hypotrempe contre l'un des Pokémon de votre Banc, si vous en avez."
			},
			damage: 20,

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
