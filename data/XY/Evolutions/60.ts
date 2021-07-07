import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Machamp BREAK",
		fr: "Mackogneur TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 190,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machamp",
		fr: "Mackogneur",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Boomerang Lariat",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "During your next turn, this Pokémon’s attacks do 100 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
			},
			damage: 100,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Lasso Boomerang",
			},
			effect: {
				fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 100,

		},
	],

	retreat: 0
}

export default card
