import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Dustox ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		269,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cascoon",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Dustox ex by your opponent's Pokémon-ex.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Silver Wind",
			},
			effect: {
				en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 30 more damage.",
			},
			damage: 40,

		},
	],






}

export default card
