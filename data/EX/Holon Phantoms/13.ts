import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Omastar δ",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Omanyte",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Bind",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeful Spikes",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Omanyte, Omastar, Kabuto, Kabutops, and Kabutops ex in your discard pile. You can't add more than 60 damage in this way.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
