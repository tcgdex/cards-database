import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Roaring Moon",
		'fr-fr': "Rugit-Lune",
		'es-es': "Bramaluna",
		'it-it': "Lunaruggente",
		'pt-br': "Lua Estrondo",
		'de-de': "Donnersichel"
	},

	illustrator: "hncl",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [1005],

	hp: 140,

	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				'en-us': "Vengeance Fletching",
			},
			effect: {
				'en-us': "This attack does 10 more damage for each Ancient card in your discard pile."
			},
			damage: "70+",
		},
		{
			cost: ["Darkness", "Colorless", "Colorless", "Colorless"],
			name: {
				'en-us': "Speed Wing",
			},
			damage: 120,
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
			type: 'holo',
			thirdParty: {
				cardmarket: 802833,
				tcgplayer: 614380
			}
		}
	]
}

export default card

