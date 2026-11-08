import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Ho-oh",
		'fr-fr': "Ho-oh",
		'de-de': "Ho-oh"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rainbow Burn",
				'fr-fr': "Brûlure arcenciel",
				'de-de': "Rainbow Burn"
			},
			effect: {
				'en-us': "This attack does 30 damage plus 10 more for each type of Basic Energy card if any, attached to Ho-oh",
				'fr-fr': "Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires par type de carte Énergie de base attachée à Ho-oh, le cas échéant.",
				'de-de': "This attack does 30 damage plus 10 more damage for each type of Basic Energy card, if any, attached to Ho-oh."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A legend says that its body glows in seven colors. A rainbow is said to form behind it when it flies.",
		'fr-fr': "D'après la légende, son corps luirait de sept couleurs. Un arc-en-ciel apparaît toujours dans son sillage."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274593,
				tcgplayer: 86119
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274593,
				tcgplayer: 86119
			}
		}
	]
}

export default card

