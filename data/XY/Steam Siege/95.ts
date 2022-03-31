import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		662,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Glide",
				fr: "Glissement",
				es: "Planeo",
				it: "Aliante",
				pt: "Planeio",
				de: "Gleiten"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
