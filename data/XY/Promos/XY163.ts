import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Weezing",
	},
	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Koffing",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Levitate",
			},
			effect: {
				en: "If this Pokémon has any Energy attached to it, this Pokémon has no Retreat Cost.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Smokescreen",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
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
