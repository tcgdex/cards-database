import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		'fr-fr': "Miaouss VMAX",
		'en-us': "Meowth VMAX",
		'es-es': "Meowth VMAX",
		'it-it': "Meowth VMAX",
		'pt-br': "Meowth VMAX",
		'de-de': "Mauzi VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,
	hp: 300,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'fr-fr': "Miaouss-V",
		'en-us': "Meowth V",
		'de-de': "Mauzi-V",
		'es-es': "Meowth V",
		'pt-br': "Meowth V",
		'it-it': "Meowth-V"
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
				'fr-fr': "Pactole G-Max",
				'en-us': "G-Max Gold Rush",
				'es-es': "Gigamonedas",
				'it-it': "Gigamonete",
				'pt-br': "Corrida do Ouro G-Max",
				'de-de': "Giga-Münzregen"
			},
			effect: {
				'fr-fr': "Piochez 3 cartes.",
				'en-us': "Draw 3 cards.",
				'es-es': "Roba 3 cartas.",
				'it-it': "Pesca tre carte.",
				'pt-br': "Compre 3 cartas.",
				'de-de': "Ziehe 3 Karten."
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

	regulationMark: "D",

	thirdParty: {
		cardmarket: 427101
	}
}

export default card
