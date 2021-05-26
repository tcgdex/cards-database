import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Hawlucha",
		fr: "Brutalibré"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Windfall",
				fr: "Rafale de Vent"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 5 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Speed Attack",
				fr: "Attaque Rapide"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Colorless"]
}

export default card
