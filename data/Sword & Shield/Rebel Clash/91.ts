import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Dragapult",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Drakloak",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Infiltrator",
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Phantom Force",
			},
			effect: {
				en: "Put 3 damage counters on your opponent’s Benched Pokémon in any way you like.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],

	regulationMark: "D"
}

export default card
