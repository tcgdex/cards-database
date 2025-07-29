import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Lt. Surge's Electabuzz",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Elekid",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Charge",
			},
			effect: {
				en: "Take up to 2 Energy cards from your discard pile and attach them to Lt. Surge's Electabuzz",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Electric Current",
			},
			effect: {
				en: "Take 1 Energy card attached to Lt. Surge's Electabuzz and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274142
	}
}

export default card
