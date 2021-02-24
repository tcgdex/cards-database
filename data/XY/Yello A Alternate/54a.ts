import { Card } from '../../../interfaces'
import Set from '../Yello A Alternate'

const card: Card = {
	name: {
		fr: "Zygarde-ex",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 190,
	types: [
		"Fightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fightning",
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
				"Fightning",
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
				"Fightning",
				"Fightning",
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
