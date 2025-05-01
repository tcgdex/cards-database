import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [118],
	set: Set,

	name: {
		en: "Goldeen"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Horn Attack"
			},
			damage: 10
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Take Down"
			},
			effect: {
				en: "Goldeen does 10 damage to itself."
			},
			damage: 30
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "10+"
		}
	],

	description: {
		en: "It swims elegantly by flittering its tail fin as if it were a dress. It has the look of a queen."
	},

	retreat: 1
}

export default card
