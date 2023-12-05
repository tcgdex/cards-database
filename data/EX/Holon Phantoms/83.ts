import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Torchic",
		fr: "Poussifeu",
		de: "Flemmli"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		255,
	],
	hp: 40,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				de: "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Intimidation",
				de: "Flackern"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
