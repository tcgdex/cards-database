import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri",
	},
	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		91,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shell Grab",
				fr: "Carap’Attrape",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tidal Wave",
				fr: "Raz-de-Marée",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
