import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		de: "Garados"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thrash",
				fr: "Mania",
				de: "Fuchtler"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, Gyarados does 20 damage to itself.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Si c’est pile, Léviator s’inflige 20 dégâts.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei \"Zahl\" fügt Garados sich selbst 20 Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Storm",
				fr: "Grosse tempête",
				de: "Schwerer Sturm"
			},

			damage: 70,

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
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "They say that during past strife, Gyarados would appear and leave blazing ruins in its wake."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
