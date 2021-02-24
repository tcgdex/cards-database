import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Naganadel-GX",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		804,
	],
	hp: 210,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Poipole",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ultra Conversion",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard an Ultra Beast card from your hand. If you do, draw 3 cards.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venom Shot",
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon. This attack does 170 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Injection GX",
			},
			effect: {
				en: "Add a card from your opponent's discard pile to their Prize cards face down. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
