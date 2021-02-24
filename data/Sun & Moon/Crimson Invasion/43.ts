import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Chimecho",
		fr: "Éoko",
	},
	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		358,
	],
	hp: 70,
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
				en: "Bell of Silence",
				fr: "Cloche du Silence",
			},
			effect: {
				en: "Your opponent can't play any Pokémon that has an Ability from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de Pokémon ayant un talent de sa main pendant son prochain tour.",
			},
			damage: 10,

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
