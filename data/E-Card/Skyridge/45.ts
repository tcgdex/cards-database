import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Wobbuffet",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mirror Coat",
			},
			effect: {
				en: "If Wobbuffet becomes Poisoned or Burned by the Defending Pokémon's attack during your opponent's turn, the Defending Pokémon becomes affected by the same Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Return Attack",
			},
			effect: {
				en: "Flip 2 coins. If either is heads, this attack does 10 damage times the number of damage counters on Wobbuffet.",
			},
			damage: 10,

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
