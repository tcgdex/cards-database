import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Mudbray",
		fr: "Tiboudet",
		es: "Mudbray",
		it: "Mudbray",
		pt: "Mudbray",
		de: "Pampuli"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rear Kick",
				fr: "Ruade",
				es: "Patada Trasera",
				it: "Retrocalcio",
				pt: "Chute Traseiro",
				de: "Rückwärtskick"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
