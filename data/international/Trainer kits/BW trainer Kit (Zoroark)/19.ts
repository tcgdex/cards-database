import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [572],
	set: Set,

	name: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Tail Slap",
			'fr-fr': "Plumo-Queue"
		},
		effect: {
			'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face."
		},
		damage: "10x"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		'en-us': "They greet one another by rubbing each other with their tails, which are always kept well groomed and clean."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280064,
				tcgplayer: 98707
			}
		},
	],

}

export default card
