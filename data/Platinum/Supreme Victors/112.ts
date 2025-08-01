import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Mankey",
		fr: "Férosinge",
		de: "Menki"
	},

	illustrator: "Kanako Eo",
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
				en: "Extra Punch",
				fr: "Extra punch",
				de: "Extrahieb"
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon LV.X, this attack does 10 damage plus 50 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon NIV.X, cette attaque inflige 10 dégâts plus 50 dégâts supplémentaires.",
				de: "Falls das Verteidigende Pokémon ein Pokémon LV.X ist, fügt dieser Angriff 10 Schadenspunkte plus 50 weitere Schadenspunkte zu."
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
		cardmarket: 278803
	}
}

export default card
