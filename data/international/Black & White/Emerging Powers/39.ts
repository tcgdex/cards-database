import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Whirlipede",
		'fr-fr': "Scobolide",
		'es-es': "Whirlipede",
		'it-it': "Whirlipede",
		'pt-br': "Whirlipede",
		'de-de': "Rollum"
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
		'en-us': "Venipede",
		'fr-fr': "Venipatte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Venoshock",
				'fr-fr': "Choc Venin",
			},
			effect: {
				'en-us': "If the Defending Pokémon is Poisoned, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
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
				'en-us': "Steamroller",
				'fr-fr': "Bulldoboule",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
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

	description: {
		'en-us': "It is usually motionless, but when attacked, it rotates at high speed and then crashes into its opponent.",
	},

	thirdParty: {
		cardmarket: 280004,
		tcgplayer: 90571
	}
}

export default card
