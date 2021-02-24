import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Claydol ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Baltoy",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Type Shift",
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Claydol ex's type is Fighting until the end of your turn.",
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
				en: "Psychic Boom",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Shadow Crush",
			},
			effect: {
				en: "You may discard a Psychic Energy card attached to Claydol ex. If you do, discard an Energy card attached to the Defending Pokémon.",
			},
			damage: 60,

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
