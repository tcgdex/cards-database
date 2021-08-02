import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Zweilous",
		fr: "Diamat",
		es: "Zweilous",
		it: "Zweilous",
		pt: "Zweilous",
		de: "Duodino"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Deino",
		fr: "Solochi"
	},

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon",
				es: "Puño Tirabuzón",
				it: "Pugno Rotante",
				pt: "Soco Saca-rolha",
				de: "Korkenzieherhieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Darkness Fang",
				fr: "Croc Obscur",
				es: "Colmillo de Oscuridad",
				it: "Oscurizanna",
				pt: "Presa Sombria",
				de: "Fänge der Dunkelheit"
			},

			damage: 70,

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
