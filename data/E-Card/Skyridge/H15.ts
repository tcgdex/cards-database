import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Machamp",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machoke",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Immunity",
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks done to Machamp.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Drag Off",
			},
			effect: {
				en: "Before doing damage, if your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon. If your opponent has no Benched Pokémon, ignore this effect.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Punch",
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

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
