import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Altaria",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Swablu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Dive",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Cleave",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281243
	}
}

export default card
