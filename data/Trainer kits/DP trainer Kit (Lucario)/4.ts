import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [67],
	set: Set,

	name: {
		en: "Machoke",
		fr: "Machopeur"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
		fr: "Machoc"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté"
			},
			effect: {
				en: "Does 40 damage minus 10 damage for each damage counter on Machoke.",
				fr: "Inflige 40 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Machopeur."
			},
			damage: "40-"
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Seismic Toss",
				fr: "Frappe Atlas"
			},
			damage: "60"
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "20+"
		}
	],

	description: {
		en: "MACHOKE's boundless power is very dangerous, so it wears a belt that suppresses its energy."
	},

	retreat: 2
}

export default card
