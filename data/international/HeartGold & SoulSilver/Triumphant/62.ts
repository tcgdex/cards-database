import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'de-de': "Dratini"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [147],

	hp: 50,

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
				'en-us': "Gentle Wrap",
				'fr-fr': "Enveloppe douce",
				'de-de': "Sanfte Umarmung"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon is full of life energy. It continually sheds its skin and grows steadily larger."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84936,
				cardmarket: 279592
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279592,
				tcgplayer: 84936
			}
		},
	],

}

export default card
