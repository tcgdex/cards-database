import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Sableye",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supernatural",
			},
			effect: {
				en: "Look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this attack. (The Supporter card remains in your opponent's hand.)",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Bind",
			},
			effect: {
				en: "You may discard a Darkness Energy card attached to Sableye. If you do, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

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
