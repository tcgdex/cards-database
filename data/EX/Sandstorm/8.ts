import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Lunatone",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		337,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Lunar Eclipse",
			},
			effect: {
				en: "Once during your turn (before your attack), if Solrock is in play, you may use this power. Until the end of your turn, Lunatone's type is Darkness. This power can't be used if Lunatone is affected by a Special Condition.\"",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cosmic Draw",
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, draw 3 cards.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Lunar Blast",
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
