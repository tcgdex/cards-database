import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Donphan",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 60,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Phanpy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Tusk Toss",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, flip a coin. If heads, return the Defending Pokémon and all cards attached to it to your opponent's hand. If tails, your opponent chooses 1 of his or her Benched Pokémon and switches it with the Defending Pokémon.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Giant Tusk",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
