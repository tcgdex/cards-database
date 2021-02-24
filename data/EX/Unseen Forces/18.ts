import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Ursaring",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		217,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Teddiursa",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Ring",
			},
			effect: {
				en: "As long as Ursaring is your Active Pokémon, your opponent's Basic Pokémon can't attack or use any Poké-Powers.",
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
				en: "Drag Off",
			},
			effect: {
				en: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Smash",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
			},
			damage: 40,

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
