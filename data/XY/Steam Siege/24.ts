import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Pyroar BREAK",
		fr: "Némélios TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		668,
	],
	hp: 160,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Pyroar",
		fr: "Némélios",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Kaiser Tackle",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
			},
			damage: 180,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Charge Impériale",
			},
			effect: {
				fr: "Ce Pokémon s’inflige 50 dégâts.",
			},
			damage: 180,

		},
	],






}

export default card
