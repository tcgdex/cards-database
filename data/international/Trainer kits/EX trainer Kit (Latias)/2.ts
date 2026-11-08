import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [256],
	set: Set,

	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu"
	},

	attacks: [{
		cost: [
			"Fire",
		],
		name: {
			'en-us': "Flare",
			'fr-fr': "Intimidation"
		},
		damage: 20
	}, {
		cost: [
			"Colorless",
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Double Kick",
			'fr-fr': "Double pied"
		},
		effect: {
			'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
			'fr-fr': "Lancez deux pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de face."
		},
		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Water",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275770,
				tcgplayer: 84403
			}
		},
	],

}

export default card
