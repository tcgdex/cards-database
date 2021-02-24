import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Cinccino",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		573,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Minccino",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Smooth Coat",
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Echoed Voice",
			},
			effect: {
				en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
