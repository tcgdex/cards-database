import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu"
	},

	illustrator: "Kagemaru Himeno",
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
				fr: "Koud'poing",
				de: "Boxhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				de: "Fußkick"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278266
	}
}

export default card
