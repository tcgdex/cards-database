import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Carvanha",
		fr: "Carvanha de Team Aqua",
		de: "Team Aquas Kanivanha"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		318,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague",
				de: "Wave Splash"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-rasoir",
				de: "Razor Fin"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276002,
		tcgplayer: 89778
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
