import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'de-de': "Golbat"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [42],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Mean Look",
				'fr-fr': "Regard noir",
				'de-de': "Horrorblick"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It can drink more than 10 ounces of blood at once. If it has too much, it gets heavy and flies clumsily."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85797,
				cardmarket: 279186
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85797,
				cardmarket: 279186
			}
		},
	],

}

export default card
