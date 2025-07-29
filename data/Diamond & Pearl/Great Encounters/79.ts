import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Mankey",
		fr: "Férosinge",
		de: "Menki"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Light Punch",
				fr: "Poing léger",
				de: "Leichter Hieb"
			},

			damage: 10,

		},
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
				en: "Does 10 damage plus 10 more damage for each damage counter on Mankey.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Férosinge.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Menki zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277981
	}
}

export default card
