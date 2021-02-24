import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Ferroseed",
		fr: "Grindur",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		597,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Continuous Tumble",
				fr: "Roulade Continue",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
