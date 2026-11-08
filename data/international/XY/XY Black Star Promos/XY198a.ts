import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "M Camerupt-EX",
		'fr-fr': "M-Camérupt-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 230,
	types: [
		"Fire",
	],
	evolveFrom: {
		'en-us': "Camerupt-EX",
		'fr-fr': "Camérupt-EX"
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magma Eruption",
				'fr-fr': "Éruption de Magma"
			},
			effect: {
				'en-us': "You may discard the top 3 cards of each player's deck. If you do, this attack does 40 more damage for each Energy card you discarded in this way.",
				'fr-fr': "Vous pouvez défausser les 3 cartes du dessus du deck de chaque joueur. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 4,






}

export default card
