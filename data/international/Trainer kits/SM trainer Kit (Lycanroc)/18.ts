import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [296],
	set: Set,

	name: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'es-es': "Makuhita",
		'it-it': "Makuhita",
		'pt-br': "Makuhita",
		'de-de': "Makuhita"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting"
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Surprise Attack"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 20
		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Strength"
			},
			damage: 40
		},
	],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297253,
				tcgplayer: 152839
			}
		},
	],

}

export default card