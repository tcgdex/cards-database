import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Amaura",
		fr: "Amagara",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		698,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	evolveFrom: {
		en: "Sail Fossil",
		fr: "Fossile Nageoire"
	}
}

export default card
