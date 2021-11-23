import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Oddish",
		fr: "Mystherbe",
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		43,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-spore",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Blot",
				fr: "Pâté",
			},
			effect: {
				en: "Remove 1 damage counter from Oddish.",
				fr: "Retirez à Mystherbe 1 marqueur de dégât.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "En journée, il plante ses piedsracines dans le sol. La nuit, il se promène en semant des graines."
	}
}

export default card
