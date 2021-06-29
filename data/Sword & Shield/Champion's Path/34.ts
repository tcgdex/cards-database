import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
		es: "Arbok",
		it: "Arbok",
		pt: "Arbok",
		de: "Arbok"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Ekans",
		fr: "Abo"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
				es: "Colmillo Afilado",
				it: "Zannaffilata",
				pt: "Presa Afiada",
				de: "Scharfe Fänge"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Tail Snap",
				fr: "Coud’ Queue Sec",
				es: "Pinza Cola",
				it: "Schioccacoda",
				pt: "Surpresa de Cauda",
				de: "Schweifhieb"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
