import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Flareon ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Flame",
			},
			effect: {
				en: "Once during your turn, when you play Flareon ex from your hand to evolve 1 of your Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Burned and Confused.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flame Screen",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Flareon ex by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Tackle",
			},
			effect: {
				en: "Flareon ex does 10 damage to itself.",
			},
			damage: 70,

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
