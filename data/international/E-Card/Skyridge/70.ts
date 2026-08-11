import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Kakuna",
		'de-de': "Kokuna"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [14],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Weedle",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'de-de': "Exoskelett"
			},
			effect: {
				'en-us': "All damage by attacks to Kakuna is reduced by 10 (after applying Weakness and Resistance).",
				'de-de': "Jeder Schaden, der Kokuna durch Angriffe zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				'en-us': "Poisonpowder",
				'de-de': "Giftpulver"
			},

			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'de-de': "Das verteidigende Pokémon ist jetzt vergiftet."
			}
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86410,
				cardmarket: 275328
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86410,
				cardmarket: 275328
			},
		},
	],
}

export default card
