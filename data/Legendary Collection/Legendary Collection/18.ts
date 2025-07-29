import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Venusaur",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ivysaur",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Trans",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may take 1 Grass Energy card attached to 1 of your Pokémon and attach it to a different one. This power can't be used if Venusaur is Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Solarbeam",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274783
	}
}

export default card
