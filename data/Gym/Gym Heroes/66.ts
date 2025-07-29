import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock's Geodude",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		74,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Call for Friend",
			},
			effect: {
				en: "Flip a coin. If heads, you may search your deck for a Basic Pokémon card with Brock in its name and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Hook Shot",
			},
			effect: {
				en: "Don't apply Resistance for this attack. (Any other effects that would happen after applying Resistance still happen.)",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274174
	}
}

export default card
