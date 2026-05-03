import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Bagon δ",
		fr: "Draby δ",
		de: "Kindwurm"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		371,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Fire",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				de: "Ember"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Bagon.",
				fr: "Défaussez une carte Énergie  attachée à Draby.",
				de: "Discard a  Energy card attached to Bagon."
			},
			damage: 30,

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


	retreat: 1,

	thirdParty: {
		cardmarket: 276820
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

