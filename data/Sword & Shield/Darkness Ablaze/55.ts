import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat",
		es: "Mareep",
		it: "Mareep",
		pt: "Mareep",
		de: "Voltilamm"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Static Shock",
				fr: "Choc Statique",
				es: "Impacto Estático",
				it: "Shock Statico",
				pt: "Choque de Estática",
				de: "Statischer Schock"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Rubbing its fleece generates electricity. You'll want to pet it because it's cute, but if you use your bare hand, you'll get a painful shock."
	}
}

export default card
