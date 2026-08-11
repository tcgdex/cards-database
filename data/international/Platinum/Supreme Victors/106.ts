import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
		'de-de': "Kaumalat"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [443],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sand Attack",
				'fr-fr': "Jet de sable",
				'de-de': "Sandwirbel"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It attacks using its huge mouth. While its attacks are powerful, it hurts itself out of clumsiness, too."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278797,
				tcgplayer: 85701,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278797,
				tcgplayer: 85701
			}
		},
		{
			type: "reverse",
			foil: 'league',
			thirdParty: {
				cardmarket: 449143,
				tcgplayer: 164209
			}
		},
		{
			type: "reverse",
			foil: 'league',
			stamp: ['staff'],
			thirdParty: {
				cardmarket: 278797,
				tcgplayer: 164210
			}
		},
	],

}

export default card
