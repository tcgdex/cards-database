import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Spewpa",
		fr: "Pérégrain",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		665,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-Spore",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
