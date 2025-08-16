import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Phanpy",
		fr: "Phanpy",
		de: "Phanpy"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		231,
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
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Phanpy.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Phanpy.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Phanpy zu."
			},
			damage: "10x",

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
				en: "Phanpy does 10 damage to itself.",
				fr: "Phanpy s'inflige 10 dégâts.",
				de: "Phanpy fügt sich selbst 10 Schadenspunkte zu."
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

	retreat: 1,

	thirdParty: {
		cardmarket: 277851,
		tcgplayer: 88002
	}
}

export default card
