import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Totodile",
		fr: "Kaiminus",
		de: "Karnimani"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [158],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Flail"
			},
			effect: {
				en: "Does 10 damage for each damage counter on Totodile.",
				fr: "Inflige 10 dégâts pour chaque marqueur de dégât sur Kaiminus.",
				de: "Does 10 damage for each damage counter on Totodile."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Bite"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89996,
				cardmarket: 276153
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89996,
				cardmarket: 276153
			}
		},
	]
}

export default card
