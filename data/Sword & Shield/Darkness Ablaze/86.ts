import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		it: "Larvitar",
		pt: "Larvitar",
		de: "Larvitar"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sand Spray",
				fr: "Jet Sableux",
				es: "Rociado de Arena",
				it: "Silicospruzzo",
				pt: "Spray de Areia",
				de: "Sandspray"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement",
				es: "Perforar",
				it: "Perforare",
				pt: "Perfurar",
				de: "Durchbohren"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
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
