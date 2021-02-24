import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Darkrai",
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 100,
	types: [
		"Darkness",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Shadow",
			},
			effect: {
				en: "Each basic Darkness Energy card attached to your Darkness Pokémon now has the effect \"If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance).\" You can't use more than 1 Dark Shadow Poké-Body each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Endless Darkness",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Flip 2 coins instead of 1 between turns. If either of them is tails, the Defending Pokémon is still Asleep. If both of them are tails, the Defending Pokémon is Knocked Out.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
