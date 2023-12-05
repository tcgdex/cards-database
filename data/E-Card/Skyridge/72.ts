import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Ledyba",
		de: "Ledyba"
	},
	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		165,
	],
	hp: 40,
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
				en: "Teary Eyes",
				de: "Tränende Augen"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Ledyba is reduced by 20.",
				de: "Jeder Schaden, der Ledyba im nächsten Zug deines Gegners durch Angriffe zugefügt wird, wird um 20 reduziert."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Quick Turn",
				de: "Schnelldrehung"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
