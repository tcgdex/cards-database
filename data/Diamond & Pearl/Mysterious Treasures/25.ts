import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Glalie",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		362,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snorunt",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Craggy Face",
			},
			effect: {
				en: "As long as Glalie is your Active Pokémon, any damage done by attacks from your opponent's Stage 2 Evolved Pokémon is reduced by 20 (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Intimidation Pebble",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer cards or Supporter cards from his or her hand during your opponent's next turn.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],





}

export default card
