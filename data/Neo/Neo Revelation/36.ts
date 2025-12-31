import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Piloswine",
		fr: "Cochignon",
		de: "Keifel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Swinub",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nap",
				fr: "Tit'sieste",
				de: "Nap"
			},
			effect: {
				en: "Remove 3 damage counters from Piloswine. If it has fewer damage counters than that, remove all of them.",
				fr: "Retirez 3 marqueurs de dégâts de Cochignon. S'il y a moins de marqueurs de dégâts sur lui, retirez-les tous.",
				de: "Remove 3 damage counters from Piloswine. If it has fewer damage counters than that, remove all of them."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High-Speed Charge",
				fr: "Charge bulldozer",
				de: "High-Speed Charge"
			},
			effect: {
				en: "Piloswine does 30 damage to itself. Piloswine can't use this attack during your next turn.",
				fr: "Cochignon s'inflige 30 dégâts. Cochignon ne peut pas utiliser à nouveau cette attaque durant votre prochain tour.",
				de: "Piloswine does 30 damage to itself. Piloswine can't use this attack during your next turn."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "S'il charge un ennemi, les poils de son dos se dressent à la verticale. Il est très sensible aux sons."
	},

	thirdParty: {
		cardmarket: 274622,
		tcgplayer: 88114
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

