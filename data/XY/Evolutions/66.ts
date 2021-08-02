import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Rattata",
		fr: "Rattata",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		19,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mischievous Fang",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may discard all Pokémon Tool cards attached to your opponent’s Active Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Bite",
			},

			damage: 10
		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Morsure",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
