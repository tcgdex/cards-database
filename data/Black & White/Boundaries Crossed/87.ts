import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Mienfoo",
		fr: "Kungfouine",
		es: "Mienfoo",
		it: "Mienfoo",
		pt: "Mienfoo",
		de: "Lin-Fu"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		619,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
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
		cardmarket: 280673
	}
}

export default card
