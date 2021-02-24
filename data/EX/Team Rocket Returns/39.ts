import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Magneton",
	},
	illustrator: "Emi Miwa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 70,
	types: [
		"Lightning",
		"Darkness",
	],
	evolveFrom: {
		en: "Magnemite",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Magnetic Lines",
			},
			effect: {
				en: "If your opponent has at least 2 Pokémon in play, move a basic Energy card from the Defending Pokémon to another of your opponent's Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Pulse",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 40,

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
