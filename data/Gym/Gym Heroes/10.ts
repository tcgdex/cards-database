import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Tentacruel",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tentacool",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Flee",
			},
			effect: {
				en: "If an attack does damage to Misty's Tentacruel while it's your Active Pokémon, you may switch it with 1 of your Benched Pokémon, which prevents all other effects of that attack on Misty's Tentacruel. This power can't be used if Misty's Tentacruel is already Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jellyfish Poison",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Confused.",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274146
	}
}

export default card
