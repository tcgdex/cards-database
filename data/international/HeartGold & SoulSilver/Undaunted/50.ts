import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'de-de': "Sleima"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [88],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sticky Liquid",
				'fr-fr': "Liquide gluant",
				'de-de': "Klebrige Flüssigkeit"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon's Retreat Cost is Colorless more.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Coût de retraite du Pokémon Défenseur est augmenté de Colorless.",
				'de-de': "Die Rückzugskosten für das Verteidigende Pokémon betragen im nächsten Zug deines Gegners  mehr."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Toss",
				'fr-fr': "Décision vaseuse",
				'de-de': "Schleimwurf"
			},

			damage: 20,

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
		'en-us': "Wherever Grimer has passed, so many germs are left behind that no plants will ever grow again."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279303,
				tcgplayer: 85913
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279303,
				tcgplayer: 85913
			}
		}
	],

}

export default card
