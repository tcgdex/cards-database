import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Rayquaza ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Frenzy",
			},
			effect: {
				en: "As long as your opponent has Kyogre, Kyogre ex, Groudon, or Groudon ex in play, Rayquaza ex's attacks do 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Bind",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Twister",
			},
			effect: {
				en: "Flip 2 coins. If both are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
