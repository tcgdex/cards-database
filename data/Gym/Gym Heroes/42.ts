import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Dratini",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Strange Barrier",
			},
			effect: {
				en: "Whenever an attack by a Basic Pokémon (including your own) does 20 or more damage to Erika's Dratini (after applying Weakness and Resistance), reduce that damage to 10. (Any other effects of attacks still happen.) This power stops working while Erika's Dratini is Asleep, Confused, or Paralyzed.",
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
				en: "Tail Strike",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274178
	}
}

export default card
