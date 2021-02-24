import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Jolteon ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eevee",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Thunder",
			},
			effect: {
				en: "Once during your turn, when you play Jolteon ex from your hand to evolve 1 of your Pokémon, you may put 1 damage counter on each of your opponent's Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Second Bite",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Blast",
			},
			effect: {
				en: "Discard a Lightning Energy card attached to Jolteon ex.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
