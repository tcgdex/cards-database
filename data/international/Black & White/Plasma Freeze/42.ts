import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Nidoqueen",
		'fr-fr': "Nidoqueen",
		'es-es': "Nidoqueen",
		'it-it': "Nidoqueen",
		'pt-br': "Nidoqueen",
		'de-de': "Nidoqueen"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poison Horn",
				'fr-fr': "Corne Empoisonnée",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Stomp",
				'fr-fr': "Double Écrasement",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 60,

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
		'en-us': "Its entire body is armored with hard scales. It will protect the young in its burrow with its life.",
	},

	thirdParty: {
		cardmarket: 280920,
		tcgplayer: 87711
	}
}

export default card
