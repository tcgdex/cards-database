import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		'en-us': "Ledyba",
		'fr-fr': "Coxy",
		'es-es': "Ledyba",
		'it-it': "Ledyba",
		'pt-br': "Ledyba",
		'de-de': "Ledyba"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [165],

	hp: 60,

	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'en-us': "Collect",
			},
			effect: {
				'en-us': "Draw a card.",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'en-us': "Punch",
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670466,
				tcgplayer: 281476
			}
		}
	]
}

export default card

