import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Golbat",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		42,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Zubat",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pulse Search",
			},
			effect: {
				en: "Look at your opponent's hand.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
