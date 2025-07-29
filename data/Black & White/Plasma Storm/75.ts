import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		it: "Riolu",
		pt: "Riolu",
		de: "Riolu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		447,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Punch",
				fr: "Koud'Poing",
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Kick",
				fr: "Koud'Pied",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280815
	}
}

export default card
