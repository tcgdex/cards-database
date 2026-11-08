import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'de-de': "Kindwurm"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		371,
	],

	hp: 50,

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
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Bagon.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Draby.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Kindwurm zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Dreaming of one day flying, it practices by leaping off cliffs every day.",
	},

	thirdParty: {
		cardmarket: 277829,
		tcgplayer: 83697
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
