import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [744],
	set: Set,

	name: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fighting"
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle"
			},
			damage: 10
		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Throw"
			},
			damage: 20
		},
	],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297260,
				tcgplayer: 152835
			}
		},
	],

}

export default card