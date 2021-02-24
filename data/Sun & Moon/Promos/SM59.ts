import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Marshadow-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		802,
	],
	hp: 150,
	types: [
		"Fightning",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Hunt",
			},
			effect: {
				en: "This Pokémon can use the attacks of any Basic Pokémon in your discard pile. (You still need the necessary Energy to use each attack.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Beatdown",
			},

			damage: 120,

		},
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Peerless Hundred Blows-GX",
			},
			effect: {
				en: "This attack does 50 damage times the amount of basic Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
