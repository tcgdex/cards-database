import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Totodile",
		fr: "Kaiminus",
		de: "Karnimani"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		158,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Bite"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Rage"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Totodile.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Kaiminus.",
				de: "Does 10 damage plus 10 more damage for each damage counter on Totodile."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Il est petit mais costaud. Il n'hésite pas à mordre tout ce qui bouge."
	},

	thirdParty: {
		cardmarket: 274480
	}
}

export default card
