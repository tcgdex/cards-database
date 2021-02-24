import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Sandslash",
		fr: "Sablaireau",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-venin",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],




}

export default card
