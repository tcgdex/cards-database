import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Victreebel",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weepinbell",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fragrance Trap",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, and if your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon. This power can't be used if Erika's Victreebel is Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Razor Leaf",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274162
	}
}

export default card
