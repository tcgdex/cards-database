import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [263],
	set: Set,

	name: {
		'en-us': "Zigzagoon",
		'fr-fr': "Zigzaton"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 40,

	types: [
		"Colorless"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Fury Swipes",
			'fr-fr': "Combo-griffe"
		},
		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
			'fr-fr': "Lancez trois pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de face."
		},
		damage: "10×"
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
				cardmarket: 275766,
				tcgplayer: 90746
			}
		},
	],

}

export default card
