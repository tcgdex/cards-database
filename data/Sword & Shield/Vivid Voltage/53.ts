import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Blitzle",
		fr: "Zébibron",
		es: "Blitzle",
		it: "Blitzle",
		pt: "Blitzle",
		de: "Elezeba"
	},

	illustrator: "Saya Tsuruta",
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
				en: "Zap Kick",
				fr: "Coup de Pied Ravageur",
				es: "Electropatada",
				it: "Dinamocalcio",
				pt: "Chute Zap",
				de: "Stromtritt"
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
	}
}

export default card
