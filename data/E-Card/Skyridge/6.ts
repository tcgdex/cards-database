import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Crobat",
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Golbat",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Carry Off",
			},
			effect: {
				en: "Once during your turn (before you attack) you may flip a coin. If heads, look at your opponent's hand. If your opponent has and Baby Pokémon, Basic Pokémon, of Evolution cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Crobat is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Cross",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads. If both of them are tails, the defending Pokémon is now Confused and Poisoned.",
			},
			damage: 40,

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
