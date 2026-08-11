import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Quagsire",
		'fr-fr': "Maraiste",
		'es-es': "Quagsire",
		'it-it': "Quagsire",
		'pt-br': "Quagsire",
		'de-de': "Morlord"
	},

	illustrator: "otumami",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [195],

	hp: 120,

	types: ["Fighting"],

	stage: "Stage1",

	evolveFrom: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
		'es-es': "Wooper",
		'it-it': "Wooper",
		'pt-br': "Wooper",
		'de-de': "Felino"
	},

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'en-us': "Beat",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'en-us': "Fickle Impact",
			},
			damage: 180,
			effect: {
				'en-us': "If you have exactly 2, 4, or 6 Prize cards remaining, this attack does nothing.",
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 614376,
				tcgplayer: 802829
			}
		}
	]
}

export default card

