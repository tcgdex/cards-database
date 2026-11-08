import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix"
	},

	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 50,

	types: [
		"Fire"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},
		damage: 10
	}, {
		cost: [
			"Fire",
			"Colorless"
		],
		name: {
			'en-us': "Firebreathing",
			'fr-fr': "Souffle-feu"
		},
		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires."
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
				cardmarket: 277202,
				tcgplayer: 90439,
			}
		},
	],

}

export default card
