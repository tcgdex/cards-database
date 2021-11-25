import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Camerupt EX",
		fr: "M-Camérupt EX"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
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
		en: "Camerupt-EX",
		fr: "Camérupt-EX"
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
				en: "Magma Eruption",
				fr: "Éruption de Magma"
			},
			effect: {
				en: "You may discard the top 3 cards of each player's deck. If you do, this attack does 40 more damage for each Energy card you discarded in this way.",
				fr: "Vous pouvez défausser les 3 cartes du dessus du deck de chaque joueur. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	suffix: "EX",
	retreat: 4
}

export default card
