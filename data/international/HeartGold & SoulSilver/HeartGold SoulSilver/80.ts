import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
		'de-de': "Wiesor"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [161],

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
				'en-us': "Scout",
				'fr-fr': "Espion",
				'de-de': "Späher"
			},
			effect: {
				'en-us': "Look at your opponent's hand.",
				'fr-fr': "Regardez la main de votre adversaire.",
				'de-de': "Schau dir die Handkarten deines Gegners an."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A very cautious Pokémon, it raises itself up using its tail to get a better view of its surroundings."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89068,
				cardmarket: 279052
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89068,
				cardmarket: 279052
			}
		},
	],

}

export default card
