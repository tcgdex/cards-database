import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Rocket's Mewtwo",
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Juxtapose",
			},
			effect: {
				en: "Flip a coin. If heads, switch the number of damage counters on Rocket's Mewtwo with the number of damage counters on the Defending Pokémon (even if it would Knock Out either Pokémon). (It's okay if 1 of the Pokémon has no damage counters on it.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Hypnoblast",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyburn",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274282,
		tcgplayer: 88777
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		},
		{
			type: "holo",
			stamp: ["winner"],
			size: "jumbo"
		}
	]
}

export default card
