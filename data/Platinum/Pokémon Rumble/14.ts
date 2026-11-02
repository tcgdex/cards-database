import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Bastiodon"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [411],

	hp: 120,

	types: [
		"Metal"
	],

	evolveFrom: {
		en: "Shieldon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strength"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278855,
				tcgplayer: 83737
			},
		}
	]
}

export default card
