import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		674,
	],

	hp: 70,

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
				fr: "Koud’Poing",
				es: "Puño",
				it: "Pugno",
				pt: "Soco",
				de: "Boxhieb"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 408244
	}
}

export default card
