import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Victreebel",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Nectar Pod",
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch 1 of your opponent's Benched Stage 2 Evolved Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. This power can't be used if Victreebel is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sleep Poison",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Leaf",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
