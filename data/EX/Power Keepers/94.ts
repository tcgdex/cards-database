import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Flygon ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 150,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vibrava",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Psychic Protector",
			},
			effect: {
				en: "If Flygon ex is damaged by an opponent's attack, you may discard up to 4 cards from your hand. If you do, any damage done to Flygon ex is reduced by 10 for each card you discarded.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
			},
			effect: {
				en: "Flip a coin. If tails, Flygon ex can't use Slashing Strike during your next turn.",
			},
			damage: 70,

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
			type: "Lightning",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
