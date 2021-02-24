import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Weezing",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Koffing",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Mass Explosion",
			},
			effect: {
				en: "Does 20 damage times the total number of Koffings, Weezings, and Dark Weezings in play (Apply Weakness and Resistance.). Then, this attack does 20 damage to each Koffing, Weezing, and Dark Weezing (even your own). Don't apply Weakness and Resistance.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Stun Gas",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, the Defending Pokémon is now Paralyzed.",
			},

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
