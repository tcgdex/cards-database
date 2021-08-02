import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Cufant",
		fr: "Charibari",
		es: "Cufant",
		it: "Cufant",
		pt: "Cufant",
		de: "Kupfanti"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strength",
				fr: "Force",
				es: "Fuerza",
				it: "Forza",
				pt: "Força",
				de: "Stärke"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
