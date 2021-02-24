import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Nosepass",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		299,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Invisible Hand",
			},
			effect: {
				en: "If any of your opponent's Active Pokémon are Evolved Pokémon, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Repulsion",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand. (If your opponent doesn't have any Benched Pokémon or other Active Pokémon, this attack does nothing.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
