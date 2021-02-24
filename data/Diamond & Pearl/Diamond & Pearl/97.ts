import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Seedot",
		fr: "Grainipiot",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		273,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bide",
				fr: "Patience",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, if Seedot would be Knocked Out by damage from an attack, Seedot is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Lancez une pièce. Si c'est face, lors du prochain tour de votre adversaire, si Grainipiot doit être mis K.O par des dégâts infligés par une attaque, il n'est pas mis K.O et ses PV restants sont de 10.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
