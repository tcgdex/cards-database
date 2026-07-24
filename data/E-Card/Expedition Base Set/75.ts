import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Draco",
		de: "Dragonir"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [133],

	hp: 50,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco"
	},

	stage: "Basic",

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],,
	attacks: [
		{
			cost: [
				"Lightning",
				"Water",
			],
			name: {
				en: "Charge Up",
				fr: "Onde spirale",
				de: "Spiralwelle"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for an Energy card and attach it to Eevee. Shuffle your deck afterward.",
				fr: "Lancez une pièce jusqu'à obtenir pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf eine Münze, bis du das erste Mal \"Zahl\" wirfst. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84898,
				cardmarket: 274950
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
