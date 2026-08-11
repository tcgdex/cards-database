import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		'en-us': "Magneton",
		'fr-fr': "Magneton"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti"
	},

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision"
		},
		damage: 20
	}, {
		cost: [
			"Lightning",
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Triple Smash",
			'fr-fr': "Triple éclate"
		},
		effect: {
			'en-us': "Flip 3 coins. This attack does 20 damage plus 20 more damage for each heads.",
			'fr-fr': "Lancez trois pièces. Cette attaque inflige 20 dégâts plus 20 dégâts multipliés par le nombre de faces."
		},
		damage: "20+"
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
				cardmarket: 275762,
				tcgplayer: 87103
			}
		},
	],

}

export default card
