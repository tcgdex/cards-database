import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Shellder",
		fr: "Kokiyas",
		de: "Muschas"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		90,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shell Rest",
				fr: "Repos coquillage",
				de: "Panzerruhe"
			},
			effect: {
				en: "Remove 2 damage counters from Shellder.",
				fr: "Retirez à Kokiyas 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von Muschas."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Tongue Slap",
				fr: "Gros coup de langue",
				de: "Zungenschelle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277858,
		tcgplayer: 89138
	}
}

export default card
