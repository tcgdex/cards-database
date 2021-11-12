import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Piloswine",
		fr: "Cochignon"
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
				fr: "Tit'sieste"
			},
			effect: {
				en: "Remove 3 damage counters from Piloswine. If it has fewer damage counters than that, remove all of them.",
				fr: "Retirez 3 marqueurs de dégâts de Cochignon. S'il y a moins de marqueurs de dégâts sur lui, retirez-les tous."
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
				fr: "Charge bulldozer"
			},
			effect: {
				en: "Piloswine does 30 damage to itself. Piloswine can't use this attack during your next turn.",
				fr: "Cochignon s'inflige 30 dégâts. Cochignon ne peut pas utiliser à nouveau cette attaque durant votre prochain tour."
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
	}
}

export default card
