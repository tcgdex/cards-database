import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Shroomish",
		fr: "Balignon",
		es: "Shroomish",
		it: "Shroomish",
		pt: "Shroomish",
		de: "Knilz"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		285,
	],

	hp: 60,

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
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It prefers damp places. By day it remains still in the forest shade. It releases toxic powder from its head.",
		de: "Es bevorzugt feuchte Orte. Am Tag sitzt es regungslos im Schatten des Waldes. Von seinem Kopf sondert es einen giftigen Puder ab."
	},

	thirdParty: {
		cardmarket: 281670,
		tcgplayer: 92175
	}
}

export default card
