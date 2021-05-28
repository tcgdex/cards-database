import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Mankey",
		fr: "Férosinge",
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
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon LV.X, this attack does 10 damage plus 50 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon NIV.X, cette attaque inflige 10 dégâts plus 50 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
