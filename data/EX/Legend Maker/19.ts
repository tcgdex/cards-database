import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Chinchou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
				fr: "Double armure"
			},
			effect: {
				en: "As long as Lanturn has any Water Energy attached to it, Lanturn is both Water and Lightning type.",
				fr: "Tant que Lanturn possède des Énergies , il est de type  et ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-rasoir"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O"
			},
			effect: {
				en: "Does 40 damage plus 20 more damage for each Water Energy attached to Lanturn but not used to pay for this attack's Energy cost. You can't add more then 40 damage in this way.",
				fr: "Inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque Énergie  attachée à Lanturn qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
