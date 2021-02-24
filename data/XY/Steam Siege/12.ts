import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Foongus",
		fr: "Trompignon",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		590,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Play Ball",
				fr: "Jeu de Ballon",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may put 3 Poké Ball cards from your discard pile into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez ajouter 3 cartes Poké Ball de votre pile de défausse à votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
