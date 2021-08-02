import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Koffing",
		fr: "Smogo",
		es: "Koffing",
		it: "Koffing",
		pt: "Koffing",
		de: "Smogon"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Suffocating Gas",
				fr: "Gaz Suffocant",
				es: "Gas Sofocante",
				it: "Gas Soffocante",
				pt: "Gás Asfixiante",
				de: "Würgegas"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 70,
	types: ["Darkness"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
