import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		de: "Garados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dragon Rage",
				fr: "Draco-Rage",
				de: "Drachenwut"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Bubblebeam",
				fr: "Bulles d'O",
				de: "Blubbstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon gelähmt."
			},
			damage: 40,

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
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Gigantesque et maléfique, il est capable de raser une ville dans un accès de rage terrifiante."
	},

	thirdParty: {
		cardmarket: 273701
	}
}

export default card
