import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		de: "Rihorn"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud'korne",
				de: "Hornattacke"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Rhyhorn does 10 damage to itself.",
				fr: "Rhinocorne s'inflige 10 dégâts.",
				de: "Rihorn fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "Sa peau est très épaisse et sa charge peut détruire un immeuble. Dommage qu'il soit stupide."
	},

	thirdParty: {
		cardmarket: 277594
	}
}

export default card
