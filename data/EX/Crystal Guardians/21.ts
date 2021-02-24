import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Igglybuff",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		174,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hover Lift",
			},
			effect: {
				en: "You pay Colorless less to retreat your Jigglypuff, Wigglytuff, Wigglytuff ex, and Igglybuff.",
			},
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
