import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		267,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Silcoon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Blot",
				fr: "Pâté"
			},
			effect: {
				en: "Remove 1 damage counter from Beautifly.",
				fr: "Retirez à Charmillon 1 marqueur de dégât."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 277420
	}
}

export default card
