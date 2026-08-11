import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [52],
	set: Set,

	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Colorless"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Collect",
			'fr-fr': "Collectionner"
		},
		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Cat Kick",
			'fr-fr': "Coup d'patte"
		},
		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277187,
				tcgplayer: 87319
			}
		},
	],

}

export default card
