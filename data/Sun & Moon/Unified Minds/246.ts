import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Mawile-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		303,
	],
	hp: 170,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Captivating Wink",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may have your opponent reveal their hand and put any number of Basic Pokémon you find there onto their Bench.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Wily Bite",
			},
			effect: {
				en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Big Eater GX",
			},
			effect: {
				en: "Your opponent reveals their hand. Discard all Supporter cards you find there. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
