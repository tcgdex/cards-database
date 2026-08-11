import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Weezing",
		'fr-fr': "Smogogo",
		'de-de': "Smogmog"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [110],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Super Poison Breath",
				'fr-fr': "Super haleine empoisonnée",
				'de-de': "Super-Gifthauch"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Explosion",
				'fr-fr': "Super explosion",
				'de-de': "Super-Explosion"
			},
			effect: {
				'en-us': "Weezing does 90 damage to itself, and don't apply Weakness to this damage.",
				'fr-fr': "Smogogo s'inflige 90 dégâts. N'appliquez pas la Faiblesse à ces dégâts.",
				'de-de': "Smogmog fügt sich selbst 90 Schadenspunkte zu, wende dabei Schwäche nicht an."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90565,
				cardmarket: 279681
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90565,
				cardmarket: 279681
			},
		},
	],

}

export default card
