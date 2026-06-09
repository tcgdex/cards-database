import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Rattata",
		de: "Rattfratz"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 30,

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
				en: "Lunge",
				de: "Ausfall"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	description: {
		en: "Cautious in the extreme, its hardy vitality lets it live in any kind of environment.",
	},

	thirdParty: {
		cardmarket: 278945,
		tcgplayer: 88619
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
