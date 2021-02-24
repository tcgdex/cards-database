import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Magmortar",
	},
	illustrator: "Hiroaki Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Smoke Bomb",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin.  If tails, that attack does nothing.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flame Drum",
			},
			effect: {
				en: "If Magby isn't anywhere under Magmortar, discard 2 Energy cards from your hand. (If you can't discard 2 Energy cards from your hand, this attack does nothing.)",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],





}

export default card
