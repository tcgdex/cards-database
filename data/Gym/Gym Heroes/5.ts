import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Vileplume",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Pollen Defense",
			},
			effect: {
				en: "If an attack does damage to Erika's Vileplume while it's your Active Pokémon (even if it's Knocked Out), flip a coin. If heads, your opponent's Active Pokémon is now Confused. This power works even while Erika's Vileplume is Asleep, Confused, or Paralyzed.",
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
				en: "Mega Drain",
			},
			effect: {
				en: "If Erika's Vileplume does damage to the Defending Pokémon (after applying Weakness and Resistance), remove a number of damage counters from Erika's Vileplume equal to half the damage done to the Defending Pokémon (rounded up to the nearest 10). If Erika's Vileplume has fewer damage counters than that, remove all of them.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274141,
		tcgplayer: 85309
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
