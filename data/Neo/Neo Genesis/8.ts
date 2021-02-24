import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Kingdra",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seadra",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Agility",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Kingdra.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dragon Tornado",
			},
			effect: {
				en: "If this attack doesn't Knock Out the Defending Pokémon, and if there are any Pokémon on your opponent's Bench, choose 1 of them and switch it with the Defending Pokémon.",
			},
			damage: 50,

		},
	],






}

export default card
