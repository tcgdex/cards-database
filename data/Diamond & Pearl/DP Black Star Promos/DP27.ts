import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Palkia",
	},
	illustrator: "Daisuke Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		484,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Spacial Rend",
			},
			effect: {
				en: "Search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. If there is any Stadium card in play, discard it.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Transback",
			},
			effect: {
				en: "You may flip a coin. If heads, discard all Energy attached to Palkia and put the Defending Pokémon and all cards attached to it on top of your opponent's deck. Your opponent shuffles his or her deck afterward.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],





}

export default card
