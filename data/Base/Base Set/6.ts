import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		de: "Garados",
		pt: "Gyarados"
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
				de: "Drachenwut",
				pt: "Raiva do Dragão"
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
				de: "Blubbstrahl",
				pt: "Raio de Bolhas"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon gelähmt.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Defensor está Paralisado."
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
		fr: "Gigantesque et maléfique, il est capable de raser une ville dans un accès de rage terrifiante.",
		pt: "Gigantesco e maléfico, ele é capaz de rasar uma cidade em um ataque de raiva terrível.",
		en: "Huge and malevolent, it is capable of razing a city in a terrifying rage attack."
	}
}

export default card
