import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		73,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wicked Tentacles",
				fr: "Tentacules Malins",
			},
			effect: {
				en: "Move an Energy from 1 of your opponent's Pokémon to another of their Pokémon. If you do, put 3 damage counters on the Pokémon you moved the Energy to.",
				fr: "Déplacez une Énergie de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon. Dans ce cas, placez 3 marqueurs de dégâts sur le Pokémon auquel vous avez attaché l’Énergie.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wrap",
				fr: "Ligotage",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
