import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		91,
	],
	hp: 100,
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
				"Water",
			],
			name: {
				en: "Sudden Grip",
				fr: "Pince Surprise",
			},
			effect: {
				en: "If this Pokémon evolved from Shellder during this turn, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Si ce Pokémon a évolué de Kokiyas pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
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



}

export default card
