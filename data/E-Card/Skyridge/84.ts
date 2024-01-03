import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Pikachu",
		de: "Pikachu"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Max Voltage",
				de: "Höchstspannung"
			},
			effect: {
				en: "Discard all Energy cards attached to Pikachu. This attack does 20 damage plus 10 more damage for each Energy card discarded in this way.",
				de: "Lege alle an Pikachu angelegten -Energiekarten auf deinen Ablagestapel. Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf diese Weise abgelegte Energiekarte zu."
			},
			damage: "20+",

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
