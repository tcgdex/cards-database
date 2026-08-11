import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'de-de': "Pupitar"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [247],

	hp: 70,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Boost Gas",
				'fr-fr': "Gazoboost",
				'de-de': "Antriebsgas"
			},
			effect: {
				'en-us': "If Pupitar has any Energy attached to it, the Retreat Cost of Pupitar is 0.",
				'fr-fr': "Si une ou plusieurs cartes Énergie sont attachées à Ymphect, le Coût de retraite de ce dernier est de 0.",
				'de-de': "Wenn an Pupitar mindestens 1 Energie angelegt ist, hat Pupitar Rückzugskosten von 0."
			}
		},
	],

	attacks: [
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
				'en-us': "Does 20 damage plus 10 more damage for each damage counter on Pupitar.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât placé sur Ymphect.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Pupitar zu."
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
		'en-us': "Its shell is as hard as sheet rock, and it is also very strong. Its thrashing can topple a mountain."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88453,
				cardmarket: 279194
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88453,
				cardmarket: 279194
			}
		},
	],

}

export default card
