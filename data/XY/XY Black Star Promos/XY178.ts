import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Absol",
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Lamentation",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), discard a random card from your opponent's hand.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Cage",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 289720
	}
}

export default card
