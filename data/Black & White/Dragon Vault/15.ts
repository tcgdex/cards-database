import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Fraxure",
		fr: "Incisache",
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		611,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281014
	}
}

export default card
