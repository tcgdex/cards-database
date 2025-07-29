import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix"
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
				de: "Feuerwerk"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Vulpix.",
				fr: "Lancez une pièce. Si c’est pile, défaussez une carte Énergie Fire attachée à Goupix.",
				de: "Wirf eine Münze. Bei \"Zahl\" lege 1 an Vulpix angelegte -Energie auf deinen Ablagestapel."
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

	description: {
		en: "As it develops, its single white tail gains color and splits into six. It is quite warm and cuddly."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279224
	}
}

export default card
