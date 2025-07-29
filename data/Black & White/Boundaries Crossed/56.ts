import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Blitzle",
		fr: "Zébibron",
		es: "Blitzle",
		it: "Blitzle",
		pt: "Blitzle",
		de: "Elezeba"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		522,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Smash Kick",
				fr: "Coud'Pattes",
			},

			damage: 10,

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
		cardmarket: 280643
	}
}

export default card
