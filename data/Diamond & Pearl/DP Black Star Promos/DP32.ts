import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Magnezone",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 130,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Magneton",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Mirror Shot",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnet Slash",
			},
			effect: {
				en: "Discard all Lightning Energy attached to Magnezone.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
