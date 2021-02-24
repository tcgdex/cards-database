import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Tirtouga",
		fr: "Carapagos",
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		564,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Shell Attack",
				fr: "Coquill-Attaque",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
