import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		745,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
				es: "Lanzarrocas",
				it: "Sassata",
				pt: "Lançamento de Rocha",
				de: "Steinwurf"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Accelerock",
				fr: "Vif Roc",
				es: "Roca Veloz",
				it: "Rocciarapida",
				pt: "Rocha Veloz",
				de: "Turbofelsen"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 299477
	}
}

export default card
