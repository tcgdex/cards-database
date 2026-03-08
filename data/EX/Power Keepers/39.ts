import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
		de: "Draschel"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Bagon",
		fr: "Draby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Raserei"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Shelgon.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Drackhaus.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Draschel zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-boulé",
				de: "Rolltackle"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277345,
		tcgplayer: 89126
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

