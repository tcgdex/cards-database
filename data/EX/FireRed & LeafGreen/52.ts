import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Wigglytuff",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Jigglypuff",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Assistance",
			},
			effect: {
				en: "Once during your turn (before your attack), if Wigglytuff is on your Bench, you may choose 1 of your Active Pokémon and remove 1 Special Condition from it.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Expand",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Wigglytuff by attacks is reduced by 10 (after applying Weakness and Resistance).",
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
