import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		453,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Poison Up",
				fr: "Poison Toxique",
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, put 3 more damage counters on that Pokémon between turns. This effect can be applied more than once.",
				fr: "Si le Pokémon Défenseur est Empoisonné, placez 3 marqueurs de dégâts supplémentaires sur ce dernier entre chaque tour. Vous pouvez appliquer cet effet plusieurs fois.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
