import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [531],
	set: Set,

	name: {
		'en-us': "Audino",
		'fr-fr': "Nanméouïe",
		'es-es': "Audino",
		'it-it': "Audino",
		'pt-br': "Audino",
		'de-de': "Ohrdoch"
	},

	illustrator: "MAHOU",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: [
		"Colorless"
	],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Doubleslap",
			'fr-fr': "Torgnoles"
		},
		effect: {
			'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face."
		},
		damage: "30x"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	description: {
		'en-us': "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling."
	},

	retreat: 2,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280074,
				tcgplayer: 98687
			}
		},
	],

}

export default card
