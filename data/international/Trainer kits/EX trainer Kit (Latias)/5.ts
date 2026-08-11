import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [322],
	set: Set,

	name: {
		'en-us': "Numel",
		'fr-fr': "Chamallot"
	},

	illustrator: "Yuka Morii",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 40,

	types: [
		"Fire"
	],

	attacks: [{
		cost: [
			"Fire",
		],
		name: {
			'en-us': "Firebreathing",
			'fr-fr': "Souffle-feu"
		},
		effect: {
			'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
		},
		damage: "10+"
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge"
		},
		damage: 20
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
				cardmarket: 275773,
				tcgplayer: 87808
			}
		},
	],

}

export default card
