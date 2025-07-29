import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Kadabra",
		de: "Kadabra"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		64,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Abra",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nightmare",
				de: "Alptraum"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				de: "Das verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Shock",
				de: "Verstandesschock"
			},
			effect: {
				en: "Don't apply Weakness and Resistance.",
				de: "Wende keine Schwäche oder Resistenz an."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275327
	}
}

export default card
