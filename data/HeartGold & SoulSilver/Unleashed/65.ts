import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Teddiursa",
		fr: "Teddiursa",
		de: "Teddiursa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		216,
	],

	hp: 60,

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
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Teddiursa does 10 damage to itself.",
				fr: "Teddiursa s’inflige 10 dégâts.",
				de: "Teddiursa fügt sich selbst 10 Schadenspunkte zu."
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

	description: {
		en: "Before food becomes scarce in wintertime, its habit is to hoard food in many hidden locations."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279221
	}
}

export default card
