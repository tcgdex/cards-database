import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Mewtwo ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 100,
	types: [
		"Darkness",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Darkness Switch",
			},
			effect: {
				en: "Discard an Energy card attached to Rocket's Mewtwo ex, and then switch all damage counters on Rocket's Mewtwo ex with those on the Defending Pokémon. (If an effect of this attack is prevented, this attack does nothing.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyburn",
			},

			damage: 70,

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
