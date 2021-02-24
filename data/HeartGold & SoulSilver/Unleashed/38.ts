import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
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
		"Fightning",
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
			},
			effect: {
				en: "If Pupitar has any Energy attached to it, the Retreat Cost for Pupitar is 0.",
				fr: "Si une ou plusieurs cartes Énergie sont attachées à Ymphect, le Coût de retraite de ce dernier est de 0.",
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
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on Pupitar.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât placé sur Ymphect.",
			},
			damage: 20,

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



}

export default card
