import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Milotic",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Feebas",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Aqua Mirage",
			},
			effect: {
				en: "If you have no cards in your hand, prevent all damage done to Milotic by attacks from your opponent's Pokémon.",
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
				en: "Dwindling Wave",
			},
			effect: {
				en: "Does 80 damage minus 10 damage for each damage counter on Milotic.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],





}

export default card
