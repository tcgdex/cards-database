import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Electrike",
		fr: "Dynavolt de Team Aqua",
		de: "Team Aquas Frizelbliz"
	},

	illustrator: "M. Akiyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 50,

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
				en: "Self Charge",
				fr: "Auto-chargement",
				de: "Self Charge"
			},
			effect: {
				en: "Attach an Energy card from your hand to Team Aqua's Electrike.",
				fr: "Attachez une carte Énergie de votre main à Dynavolt de Team Aqua.",
				de: "Attach an Energy card from your hand to Team Aqua's Electrike."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
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

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276004,
		tcgplayer: 89787
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		}
	]
}

export default card
