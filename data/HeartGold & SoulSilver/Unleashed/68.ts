import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Vulpix",
		fr: "Goupix",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		37,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fireworks",
				fr: "Feux d’artifice",
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Vulpix.",
				fr: "Lancez une pièce. Si c’est pile, défaussez une carte Énergie Fire attachée à Goupix.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
