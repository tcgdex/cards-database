import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Carkol",
		fr: "Wagomine",
		es: "Carkol",
		it: "Carkol",
		pt: "Carkol",
		de: "Wagong"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Rolycoly",
		fr: "Charbi"
	},

	attacks: [
		{
			cost: [
				"Colorless",
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

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Crash",
				fr: "Tacle Feu",
				es: "Golpe Calor",
				it: "Marchiafuoco",
				pt: "Choque de Calor",
				de: "Brandstempel"
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

	retreat: 3,
	hp: 100,
	types: ["Fighting"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
