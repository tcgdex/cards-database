import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
		de: "Dragonir"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [148],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco"
	},

	stage: "Stage1",

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
				en: "Spiral Wave",
				fr: "Onde spirale",
				de: "Spiralwelle"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à obtenir pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf eine Münze, bis du das erste Mal \"Zahl\" wirfst. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	retreat: 2,

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
			thirdParty: {
				tcgplayer: 84898,
				cardmarket: 274950
			},
		},
	],
}

export default card
