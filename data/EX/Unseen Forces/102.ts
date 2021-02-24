import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Espeon ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Eevee",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Devo Flash",
			},
			effect: {
				en: "Once during your turn, when you play Espeon ex from your hand to evolve 1 of your Pokémon, you may choose 1 Evolved Pokémon on your opponent's Bench, remove the highest Stage Evolution card from that Pokémon, and put it back into his or her hand.",
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
				en: "Snap Tail",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyloop",
			},
			effect: {
				en: "Does 60 damage plus 30 more damage for each Trainer card your opponent has in play.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
