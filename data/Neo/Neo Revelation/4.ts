import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Crobat",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Golbat",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Triggered Poison",
			},
			effect: {
				en: "If your opponent attaches an Energy card to the Defending Pokémon during his or her next turn, that Pokémon becomes Poisoned.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Cross Attack",
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
