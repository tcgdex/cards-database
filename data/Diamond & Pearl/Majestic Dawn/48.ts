import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		de: "Mogelbaum"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 80,

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
				en: "Does 10 damage times the number of damage counters on Sudowoodo.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Simularbre.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Mogelbaum zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Wood Hammer",
				fr: "Martobois",
				de: "Holzhammer"
			},
			effect: {
				en: "Sudowoodo does 30 damage to itself.",
				fr: "Simularbre s'inflige 30 dégâts.",
				de: "Mogelbaum fügt sich slebst 30 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278097
	}
}

export default card
