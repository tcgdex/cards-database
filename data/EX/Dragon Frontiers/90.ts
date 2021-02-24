import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Altaria ex δ",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Swablu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Extra Boost",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to 1 of your Stage 2 Pokémon-ex. This power can't be used if Altaria ex is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Light",
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
