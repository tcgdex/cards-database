import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Kingdra",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seadra",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dragon Veil",
			},
			effect: {
				en: "As long as Kingdra is in play, each of your Active Pokémon has no Weakness.",
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
				en: "Hyper Whirlpool",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard an Energy card attached to the Defending Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
			},
			damage: 50,

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
