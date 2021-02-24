import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Machoke",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		67,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machop",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Return Home",
			},
			effect: {
				en: "If you have any Benched Pokémon, shuffle 1 of them and all cards attached to it into your deck.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Gentle Kick",
			},
			effect: {
				en: "If the Defending Pokémon has no damage counters on it, this attack does 40 damage. If it has any, this attack does 20 damage.",
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
