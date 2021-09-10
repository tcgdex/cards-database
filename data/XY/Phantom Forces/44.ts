import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},
	illustrator: "HiRON",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		710,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Night March",
				fr: "Marche Nocturne",
			},
			effect: {
				en: "This attack does 20 damage times the number of Pokémon in your discard pile that have the Night March attack.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon dans votre pile de défausse possédant l’attaque Marche Nocturne.",
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
