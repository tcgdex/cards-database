import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Claydol",
	},
	illustrator: "Zu-Ka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 80,
	types: [
		"Psychic",
		"Darkness",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magma Switch",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move an Energy card attached to your Pokémon with Team Magma in its name to another of your Pokémon. This power can't be used if Team Magma's Claydol is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Hand",
			},
			effect: {
				en: "If you have more cards in your hand than your opponent, this attack does 40 damage plus 20 more damage.",
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
