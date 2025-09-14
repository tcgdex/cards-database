import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Marill",
		fr: "Marill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		183,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Marill but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Marill mais non utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "L'extrémité de sa queue, qui contient une huile plus légère que l'eau, lui permet de nager sans couler."
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
