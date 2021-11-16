import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		267,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Silcoon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Withering Dust",
				fr: "Poussière desséchante"
			},
			effect: {
				en: "As long as Beautifly is in play, do not apply Resistance for all Active Pokémon.",
				fr: "Tant que Charmillon est en jeu, vous ne pouvez pas appliquer la Résistance aux Pokémon Actifs."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Poussière paralysante"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Parallel Gain",
				fr: "Gain parallèle"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon, including Beautifly.",
				fr: "Retirez un marqueur de dégât à tous vos Pokémon, Charmillon inclus."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
