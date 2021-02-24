import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Heatran",
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		485,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Heat Metal",
			},
			effect: {
				en: "Your opponent can't remove the Special Condition Burned by evolving or devolving his or her Burned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Burned Pokémon.) Whenever your opponent flips a coin for the Special Condition Burned between turns, treat it as tails.",
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
