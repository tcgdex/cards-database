import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Cacnea",
		fr: "Cacnea",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		331,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sucker Punch",
				fr: "Coup Bas",
			},
			effect: {
				en: "If this Pokémon has any Darkness Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l’Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
