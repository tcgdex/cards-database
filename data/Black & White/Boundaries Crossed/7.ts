import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		es: "Scyther",
		it: "Scyther",
		pt: "Scyther",
		de: "Sichlor"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Scythe",
				fr: "Faucille Acérée",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280594
	}
}

export default card
