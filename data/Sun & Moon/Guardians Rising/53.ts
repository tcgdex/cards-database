import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Gothorita",
		fr: "Mesmérella",
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		575,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Slap",
				fr: "Gifle",
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
