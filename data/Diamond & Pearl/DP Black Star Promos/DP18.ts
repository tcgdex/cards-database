import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Palkia",
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		484,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Restructure",
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent switch 1 of your Active Pokémon with 1 of your Benched Pokémon. Then, you switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. This power can't be used if Palkia is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Reflect",
			},
			effect: {
				en: "You may move all Energy cards attached to Palkia to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)",
			},
			damage: 60,

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
