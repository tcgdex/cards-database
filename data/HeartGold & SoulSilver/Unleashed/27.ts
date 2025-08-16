import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring",
		de: "Ursaring"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Confront",
				fr: "Confrontation",
				de: "Konfrontieren"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross Chop",
				fr: "Coup-croix",
				de: "Kreuzhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "With its ability to distinguish any aroma, it unfailing finds all food buried deep underground."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279183,
		tcgplayer: 90254
	}
}

export default card
