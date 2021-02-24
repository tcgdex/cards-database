import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Treecko",
		fr: "Arcko",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		252,
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
				en: "Energy Ball",
				fr: "Eco-Sphère",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Treecko but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Arcko qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Absorb",
				fr: "Vol-vie",
			},
			effect: {
				en: "Remove 1 damage counter from Treecko.",
				fr: "Retirez à Arcko 1 marqueur de dégât.",
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
