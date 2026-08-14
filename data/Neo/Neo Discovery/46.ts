import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
	},

	illustrator: "Kimiya Masago",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				de: "Zornklinge"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage plus 10 more damage if exactly 1 is heads, or 20 more damage if exactly 2 are heads, or 40 more damage if exactly 3 are heads, or 80 more damage if all 4 are heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires si c'est 1 face, ou 20 dégâts supplémentaires si c'est 2 faces, ou 40 dégâts supplémentaires si c'est 3 faces, ou 80 dégâts supplémentaires si c'est 4 faces.",
				de: "Wirf vier Münzen. Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte zu, wenn du genau einmal „Kopf“ geworfen hat, bzw. 20 weitere Schadenspunkte, wenn du genau zweimal „Kopf“ geworfen hast, bzw. 40 weitere Schadenspunkte, wenn du genau dreimal „Kopf“ geworfen hast, bzw. 80 weitere Schadenspunkte, wenn du jedesmal „Kopf“ geworfen hast."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "It slashes through grass with its sharp scythes, moving too fast for the human eye to track.",
		fr: "Il se fraie un chemin dans les herbes avec ses cisailles, trop rapidement pour qu'un être humain puisse le suivre.",
		de: "Es saust mit seinen scharfen Sensen durch das Gras und bewegt sich dabei so schnell, dass das menschliche Auge nicht folgen kann."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274557,
				tcgplayer: 88994
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274557,
				tcgplayer: 88994
			}
		}
	]
}

export default card

