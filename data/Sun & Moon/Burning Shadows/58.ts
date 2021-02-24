import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Scolipede",
		fr: "Brutapode",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		545,
	],
	hp: 160,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Horn",
				fr: "Corne Empoisonnée",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 80,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Steamroller",
				fr: "Bulldoboule",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 140,

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
