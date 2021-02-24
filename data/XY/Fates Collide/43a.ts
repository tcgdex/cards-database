import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Regirock-EX",
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		377,
	],
	hp: 180,
	types: [
		"Fightning",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Regi Power",
			},
			effect: {
				en: "The attacks of your Fighting Pokémon (excluding Regirock-EX) do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Bedrock Press",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
