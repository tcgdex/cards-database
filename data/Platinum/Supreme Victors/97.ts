import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		de: "Panflam"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		390,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Chop",
				fr: "Coup tranchant",
				de: "Boxhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jump On",
				fr: "Sauter",
				de: "Draufspringen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278788
	}
}

export default card
