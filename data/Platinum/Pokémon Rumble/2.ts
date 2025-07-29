import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Cherrim",
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		421,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cherubi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
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

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278843
	}
}

export default card
