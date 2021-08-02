import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Clobbopus",
		fr: "Poulpaf",
		es: "Clobbopus",
		it: "Clobbopus",
		pt: "Clobbopus",
		de: "Klopptopus"
	},

	illustrator: "Misa Tsutsui",
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
				"Fighting",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
				es: "Toque",
				it: "Battuta",
				pt: "Pulso",
				de: "Verprügler"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
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
