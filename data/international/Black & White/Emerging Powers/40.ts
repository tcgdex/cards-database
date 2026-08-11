import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Scolipede",
		'fr-fr': "Brutapode",
		'es-es': "Scolipede",
		'it-it': "Scolipede",
		'pt-br': "Scolipede",
		'de-de': "Cerapendra"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		545,
	],

	hp: 140,

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
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Toxic Claws",
				'fr-fr': "Griffes Toxiques",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wild Horn",
				'fr-fr': "Corne Sauvage",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "With quick movements, it chases down its foes, attacking relentlessly with its horns until it prevails.",
	},

	thirdParty: {
		cardmarket: 280005,
		tcgplayer: 88969
	}
}

export default card
