import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Static Shock",
				fr: "Choc Statique",
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 280639
	}
}

export default card
