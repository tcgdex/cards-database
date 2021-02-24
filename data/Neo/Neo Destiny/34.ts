import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Flaaffy",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		180,
	],
	hp: 60,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Mareep",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "High Voltage",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn.",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Stun Wave",
			},
			effect: {
				en: "If the Defending Pokémon has a Pokémon Power, that power stops working until the end of your next turn.",
			},
			damage: 30,

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
