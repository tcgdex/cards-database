import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Chikorita",
	},
	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Trainer",

	set: Set,
	dexId: [
		152,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",



	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	effect: {
		en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
	},


}

export default card
