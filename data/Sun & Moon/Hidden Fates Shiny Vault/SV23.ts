import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Rockruff",
		fr: "Rocabot",
		de: "Wuffels"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		744,
	],
	hp: 70,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
				de: "Überraschungsangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		en: "This Pokémon has lived with people since times long ago. It can sense when its Trainer is in the dumps and will stick close by its Trainer's side.",
		de: "Es lebte schon immer mit Menschen zusammen und kann spüren, wenn sein Trainer traurig ist. Es weicht dann nicht mehr von seiner Seite."
	},
}

export default card
