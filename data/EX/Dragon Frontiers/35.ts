import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Nidorino δ",
		fr: "Nidorino δ",
		de: "Nidorino"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Nidoran?",
		fr: "Nidoran"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Raserei"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Nidorino.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Nidorino.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Nidorino zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal'korne",
				de: "Hornbohrer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277240
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
