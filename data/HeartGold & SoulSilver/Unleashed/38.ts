import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		de: "Pupitar"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Boost Gas",
				fr: "Gazoboost",
				de: "Antriebsgas"
			},
			effect: {
				en: "If Pupitar has any Energy attached to it, the Retreat Cost for Pupitar is 0.",
				fr: "Si une ou plusieurs cartes Énergie sont attachées à Ymphect, le Coût de retraite de ce dernier est de 0.",
				de: "Wenn an Pupitar mindestens 1 Energie angelegt ist, hat Pupitar Rückzugskosten von 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Raserei"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on Pupitar.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât placé sur Ymphect.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Pupitar zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its shell is as hard as sheet rock, and it is also very strong. Its thrashing can topple a mountain."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279194
	}
}

export default card
