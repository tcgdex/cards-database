import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Buzzwole",
		'fr-fr': "Mouscoto",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		794,
	],
	hp: 130,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sledgehammer",
				'fr-fr': "Coup de Masse",
			},
			effect: {
				'en-us': "If your opponent has exactly 4 Prize cards remaining, this attack does 90 more damage.",
				'fr-fr': "S’il reste exactement 4 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Swing Around",
				'fr-fr': "Balançoire",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
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

	retreat: 2,




	description: {
		'en-us': "A mysterious life-form called an Ultra Beast. Witnesses saw it pulverize a dump truck with a single punch.",
	},
}

export default card
