import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		de: "Maskergen"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [284],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
		de: "Gehweiher"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				de: "Windstoß"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87245,
				cardmarket: 277421
			},
		},
	],

}

export default card
