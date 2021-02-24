import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Skiploom",
		fr: "Floravol",
	},
	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		188,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Hoppip",
		fr: "Granivol",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Splash",
				fr: "Trempette",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
