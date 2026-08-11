import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
		de: "Quappo"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
		de: "Quaputzi"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing tire-bouchon",
				de: "Korkenzieherhieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Submission",
				fr: "Sacrifice",
				de: "Überroller"
			},
			effect: {
				en: "Poliwrath does 20 damage to itself.",
				fr: "Tartard s'inflige 20 dégâts.",
				de: "Quappo fügt sich selber 20 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "Although an energetic, skilled swimmer that uses all of its muscles, it lives on dry land.",
		fr: "Bien qu'excellent nageur qui utilise tous ses muscles, il vit sur la terre ferme.",
		de: "Obwohl es ein energischer, guter Schwimmer ist und alle seine Muskeln dabei einsetzt, lebt es im Trockenen."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274520,
				tcgplayer: 88269
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274520,
				tcgplayer: 88269
			}
		}
	]
}

export default card
