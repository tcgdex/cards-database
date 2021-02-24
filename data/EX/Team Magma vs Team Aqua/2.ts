import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Crawdaunt",
	},
	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		342,
	],
	hp: 80,
	types: [
		"Water",
		"Darkness",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Aqua Reverse",
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has Team Magma in its name and switch it with 1 of the Defending Pokémon. Your opponent chooses which Defending Pokémon to switch.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Deep Impact",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused.",
			},
			damage: 40,

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
