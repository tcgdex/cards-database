import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		504,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279815
	}
}

export default card
