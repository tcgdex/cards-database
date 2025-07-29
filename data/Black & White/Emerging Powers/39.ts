import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Whirlipede",
		fr: "Scobolide",
		es: "Whirlipede",
		it: "Whirlipede",
		pt: "Whirlipede",
		de: "Rollum"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		544,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Venoshock",
				fr: "Choc Venin",
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, this attack does 60 more damage.",
				fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
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
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280004
	}
}

export default card
