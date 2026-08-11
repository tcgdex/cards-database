import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [255],
	set: Set,

	name: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Fire"
	],

	attacks: [{
		cost: [
			"Fire",
			"Colorless"
		],
		name: {
			'en-us': "Firebreathing",
			'fr-fr': "Souffle-feu"
		},
		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires."
		},
		damage: "20+"
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
				cardmarket: 275775,
				tcgplayer: 89954
			}
		},
	],

}

export default card
