import { Card } from '../../../interfaces'
import Set from '../Yello A Alternate'

const card: Card = {
	name: {
		fr: "Zygarde-ex",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	dexId: [718],
	set: Set,

	hp: 190,
	types: [
		"Fighting",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				fr: "Vibration Terrestre",
			},
			effect: {
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Tempête Cellulaire",
			},
			effect: {
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Force Chtonienne",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
