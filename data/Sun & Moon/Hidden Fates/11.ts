import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Headache",
				fr: "Migraine",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 394772
	}
}

export default card
