import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [532],
	set: Set,

	name: {
		'en-us': "Timburr",
		'fr-fr': "Charpenti",
		'es-es': "Timburr",
		'it-it': "Timburr",
		'pt-br': "Timburr",
		'de-de': "Praktibalk"
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fighting"
	],
	stage: "Basic",

	attacks: [{
		cost: [
			"Fighting",
			"Fighting"
		],
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face"
		},
		damage: 30
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	description: {
		'en-us': "It fights by swinging a piece of lumber around. It is close to evolving when it can handle the lumber without difficulty."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280092,
				tcgplayer: 98686
			}
		},
	],

}

export default card
