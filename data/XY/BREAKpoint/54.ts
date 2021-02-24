import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		452,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Claws",
				fr: "Griffes Empoisonnées",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 70,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros Impact",
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
