import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Magby",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		240,
	],
	hp: 50,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby), and remove all damage counters from Magby.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Detour",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
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
