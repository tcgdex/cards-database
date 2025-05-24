import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Miaouss VMAX",
		en: "Meowth VMAX",
		es: "Meowth VMAX",
		it: "Meowth VMAX",
		pt: "Meowth VMAX",
		de: "Mauzi VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	hp: 300,

	types: [
		"Colorless",
	],

	evolveFrom: {
		fr: "Miaouss-V",
		en: "Meowth V",
		de: "Mauzi-V",
		es: "Meowth V",
		pt: "Meowth V",
		it: "Meowth-V"
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Pactole G-Max",
				en: "G-Max Gold Rush",
				es: "Gigamonedas",
				it: "Gigamonete",
				pt: "Corrida do Ouro G-Max",
				de: "Giga-Münzregen"
			},
			effect: {
				fr: "Piochez 3 cartes.",
				en: "Draw 3 cards.",
				es: "Roba 3 cartas.",
				it: "Pesca tre carte.",
				pt: "Compre 3 cartas.",
				de: "Ziehe 3 Karten."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	dexId: [52],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
