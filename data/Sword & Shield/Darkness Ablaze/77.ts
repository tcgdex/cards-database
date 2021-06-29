import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		pt: "Golurk",
		de: "Golgantes"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem"
	},

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dynamic Chop",
				fr: "Coupe Dynamique",
				es: "Golpe Dinámico",
				it: "Dinamicolpo",
				pt: "Golpe Dinâmico",
				de: "Wuchthieb"
			},

			damage: 80,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Golurk Hammer",
				fr: "Maillet Golemastoc",
				es: "Martillo Golurk",
				it: "Martello Golurk",
				pt: "Martelo Golurk",
				de: "Golgantes-Hammer"
			},

			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
