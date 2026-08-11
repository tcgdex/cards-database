import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Scolipede",
		'fr-fr': "Brutapode",
		'es-es': "Scolipede",
		'it-it': "Scolipede",
		'pt-br': "Scolipede",
		'de-de': "Cerapendra"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		545,
	],

	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Whirlipede",
		'fr-fr': "Scobolide",
	},

	stage: "Stage2",

	attacks: [
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
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Claws",
				'fr-fr': "Griffes Empoisonnées",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 80,

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
		'en-us': "Highly aggressive, it uses the claws near its neck to dig into its opponent and poison them.",
	},

	thirdParty: {
		cardmarket: 279792,
		tcgplayer: 88968
	}
}

export default card
